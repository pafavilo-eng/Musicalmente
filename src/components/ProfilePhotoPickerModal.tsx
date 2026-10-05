import React, { useState, useRef } from 'react';
import { Camera, Image, X, Check, RefreshCw, ShieldAlert, Sparkles, Trash2 } from 'lucide-react';
import { soundService } from '../services/soundService';

interface ProfilePhotoPickerModalProps {
  currentPhotoUrl?: string;
  onSavePhoto: (photoUrl: string) => void;
  onRemovePhoto?: () => void;
  onClose: () => void;
}

export const ProfilePhotoPickerModal: React.FC<ProfilePhotoPickerModalProps> = ({
  currentPhotoUrl,
  onSavePhoto,
  onRemovePhoto,
  onClose,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(currentPhotoUrl || null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cameraActive, setCameraActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // Stop camera stream safely
  const stopLiveCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    setCameraActive(false);
  };

  // Process any File (from camera or gallery) into high-quality 1:1 circular-ready photo
  const processImageFile = (file: File) => {
    setIsProcessing(true);
    setErrorMessage('');

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Por favor, selecione um arquivo de imagem válido (JPG, PNG, HEIC).');
      setIsProcessing(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.onload = () => {
        try {
          // Center-crop to 1:1 aspect ratio with high quality 512x512 canvas
          const targetSize = 512;
          const canvas = document.createElement('canvas');
          canvas.width = targetSize;
          canvas.height = targetSize;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            setErrorMessage('Não foi possível processar a imagem neste dispositivo.');
            setIsProcessing(false);
            return;
          }

          const minDim = Math.min(img.naturalWidth || img.width, img.naturalHeight || img.height);
          const sx = ((img.naturalWidth || img.width) - minDim) / 2;
          const sy = ((img.naturalHeight || img.height) - minDim) / 2;

          // Enable smoothing for crisp anti-aliasing
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, targetSize, targetSize);

          const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.92);
          setPreviewImage(optimizedDataUrl);
          soundService.playAchievement();
        } catch (err) {
          console.error('Error processing photo:', err);
          setErrorMessage('Erro ao otimizar a imagem. Tente outra foto.');
        } finally {
          setIsProcessing(false);
        }
      };
      img.onerror = () => {
        setErrorMessage('Não foi possível carregar a imagem selecionada.');
        setIsProcessing(false);
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      setErrorMessage('Erro ao ler arquivo da imagem.');
      setIsProcessing(false);
    };
    reader.readAsDataURL(file);
  };

  // Trigger Native Camera Input
  const handleTriggerNativeCamera = () => {
    soundService.playTap();
    setErrorMessage('');
    // Try browser web camera first if available, otherwise trigger native input
    if (typeof navigator !== 'undefined' && navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function' && window.innerWidth > 640) {
      startLiveCamera();
    } else if (cameraInputRef.current) {
      cameraInputRef.current.click();
    }
  };

  // Trigger Photo Library Input
  const handleTriggerGallery = () => {
    soundService.playTap();
    setErrorMessage('');
    stopLiveCamera();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Live Web Camera Feed
  const startLiveCamera = async () => {
    try {
      stopLiveCamera();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 720 } },
        audio: false,
      });
      mediaStreamRef.current = stream;
      setCameraActive(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn('Live camera permission or device error, falling back to camera input:', err);
      if (cameraInputRef.current) {
        cameraInputRef.current.click();
      }
    }
  };

  // Snapshot from live camera
  const captureSnapshot = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const size = Math.min(video.videoWidth, video.videoHeight) || 512;
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const sx = (video.videoWidth - size) / 2;
    const sy = (video.videoHeight - size) / 2;
    ctx.drawImage(video, sx, sy, size, size, 0, 0, 512, 512);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
    setPreviewImage(dataUrl);
    stopLiveCamera();
    soundService.playAchievement();
  };

  // Save confirmed photo
  const handleConfirmSave = () => {
    if (!previewImage) return;
    soundService.playAchievement();
    stopLiveCamera();
    onSavePhoto(previewImage);
    onClose();
  };

  // Remove photo and reset to default avatar
  const handleRemove = () => {
    soundService.playTap();
    stopLiveCamera();
    setPreviewImage(null);
    if (onRemovePhoto) onRemovePhoto();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/75 backdrop-blur-md animate-fade-in overflow-y-auto"
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 1rem)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 1rem)',
        paddingLeft: 'max(env(safe-area-inset-left, 0px), 1rem)',
        paddingRight: 'max(env(safe-area-inset-right, 0px), 1rem)',
      }}
    >
      {/* Hidden File Inputs */}
      {/* Direct Camera Input with capture="user" */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) processImageFile(file);
          e.target.value = '';
        }}
      />
      {/* Photo Library Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) processImageFile(file);
          e.target.value = '';
        }}
      />

      <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl border-4 border-amber-300 my-auto text-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-100">
          <div className="flex items-center gap-2">
            <span className="text-xl">📸</span>
            <h3 className="font-display font-extrabold text-lg text-indigo-950">
              Foto de Perfil
            </h3>
          </div>
          <button
            type="button"
            onClick={() => {
              stopLiveCamera();
              soundService.playTap();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Live Camera Stream View */}
        {cameraActive && (
          <div className="mt-4 flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl bg-slate-900">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover transform -scale-x-100"
              />
            </div>
            <div className="flex items-center gap-2 mt-3">
              <button
                type="button"
                onClick={captureSnapshot}
                className="px-4 py-2 rounded-xl bg-amber-400 text-amber-950 font-display font-extrabold text-xs shadow-md hover:bg-amber-500 cursor-pointer flex items-center gap-1.5"
              >
                <Camera size={14} />
                Capturar Foto
              </button>
              <button
                type="button"
                onClick={stopLiveCamera}
                className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 font-display font-bold text-xs hover:bg-slate-200 cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Circular Preview Container */}
        {!cameraActive && (
          <div className="mt-4 flex flex-col items-center">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl bg-gradient-to-tr from-amber-100 to-yellow-50 flex items-center justify-center group">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Prévia do perfil"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 p-2 text-center">
                  <Camera size={36} className="text-amber-500/80 mb-1" />
                  <span className="text-[11px] font-display font-bold text-amber-900">
                    Sem foto
                  </span>
                </div>
              )}

              {isProcessing && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white">
                  <RefreshCw size={24} className="animate-spin text-amber-400" />
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-500 mt-2 text-center font-medium">
              Sua foto aparecerá em formato circular, com alta nitidez e sem distorções.
            </p>
          </div>
        )}

        {/* Error notification */}
        {errorMessage && (
          <div className="mt-3 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium text-center">
            {errorMessage}
          </div>
        )}

        {/* Action Buttons: Camera & Photo Library */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            type="button"
            onClick={handleTriggerNativeCamera}
            className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 text-amber-950 font-display font-bold text-xs flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-xs">
              <Camera size={18} />
            </div>
            <span>Tirar Foto</span>
            <span className="text-[9px] text-amber-800 font-sans font-normal">
              Usar câmera
            </span>
          </button>

          <button
            type="button"
            onClick={handleTriggerGallery}
            className="p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 border-2 border-sky-300 text-sky-950 font-display font-bold text-xs flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-xs">
              <Image size={18} />
            </div>
            <span>Biblioteca</span>
            <span className="text-[9px] text-sky-800 font-sans font-normal">
              Fotos do celular
            </span>
          </button>
        </div>

        {/* Permissions & Privacy Information Notice */}
        <div className="mt-3 p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-[10px] text-slate-600">
          <div className="flex items-center gap-1.5 font-bold font-display text-slate-800">
            <Sparkles size={12} className="text-amber-500" />
            <span>Permissões do Dispositivo</span>
          </div>
          <div className="space-y-1 text-[9.5px] leading-relaxed">
            <p>
              • <strong>Câmera:</strong> utilizada unicamente para capturar sua foto no momento do disparo.
            </p>
            <p>
              • <strong>Biblioteca:</strong> permite escolher com segurança uma foto salva no rolo do celular.
            </p>
          </div>
        </div>

        {/* Confirm Save / Remove Photo */}
        <div className="mt-4 flex flex-col gap-2">
          {previewImage && (
            <button
              type="button"
              onClick={handleConfirmSave}
              className="w-full py-2.5 px-4 rounded-xl text-white font-display font-extrabold text-xs btn-3d-amber flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <Check size={16} strokeWidth={3} />
              <span>Salvar Foto de Perfil</span>
            </button>
          )}

          {currentPhotoUrl && (
            <button
              type="button"
              onClick={handleRemove}
              className="w-full py-2 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-display font-bold text-xs border border-rose-200 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <Trash2 size={13} />
              <span>Remover Foto / Usar Personagem 3D</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
