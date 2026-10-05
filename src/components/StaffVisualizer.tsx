import React from 'react';

interface StaffVisualizerProps {
  clef?: 'sol' | 'fa' | 'do';
  noteLine?: number; // 1 to 5 (from bottom to top)
  noteSpace?: number; // 1 to 4 (from bottom to top)
  ledgerLine?: number; // -1 for lower (e.g., Middle C), 1 for upper
  noteName?: string;
  showLabels?: boolean;
}

export const StaffVisualizer: React.FC<StaffVisualizerProps> = ({
  clef = 'sol',
  noteLine,
  noteSpace,
  ledgerLine,
  noteName,
  showLabels = true,
}) => {
  // Height = 130px, Width = 300px
  // 5 lines spaced 16px apart
  // Line 5: y = 28
  // Line 4: y = 44
  // Line 3: y = 60
  // Line 2: y = 76
  // Line 1: y = 92
  const lineYMap: Record<number, number> = {
    1: 92,
    2: 76,
    3: 60,
    4: 44,
    5: 28,
  };

  const spaceYMap: Record<number, number> = {
    1: 84, // between 1 & 2
    2: 68, // between 2 & 3
    3: 52, // between 3 & 4
    4: 36, // between 4 & 5
  };

  let noteY: number | null = null;
  if (noteLine !== undefined && lineYMap[noteLine]) {
    noteY = lineYMap[noteLine];
  } else if (noteSpace !== undefined && spaceYMap[noteSpace]) {
    noteY = spaceYMap[noteSpace];
  } else if (ledgerLine === -1) {
    noteY = 108; // Middle C on 1st lower line in Treble
  } else if (ledgerLine === 1) {
    noteY = 12; // 1st upper line
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-amber-50/80 rounded-2xl p-3 border border-amber-200/70 shadow-inner flex flex-col items-center">
      <svg
        viewBox="0 0 320 130"
        className="w-full h-auto drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Subtle Gradient */}
        <rect width="320" height="130" rx="12" fill="#fffcf5" stroke="#fed7aa" strokeWidth="1" />

        {/* 5 Staff Lines */}
        {[5, 4, 3, 2, 1].map((lineNum) => {
          const y = lineYMap[lineNum];
          return (
            <g key={lineNum}>
              <line
                x1="25"
                y1={y}
                x2="295"
                y2={y}
                stroke="#334155"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {showLabels && (
                <text
                  x="14"
                  y={y + 4}
                  fill="#94a3b8"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {lineNum}
                </text>
              )}
            </g>
          );
        })}

        {/* Clef Symbol Rendering */}
        {clef === 'sol' && (
          <text
            x="36"
            y="88"
            fill="#4338ca"
            fontSize="54"
            fontFamily="serif"
            style={{ fontWeight: 400 }}
          >
            𝄞
          </text>
        )}

        {clef === 'fa' && (
          <g>
            <text
              x="36"
              y="68"
              fill="#c2410c"
              fontSize="48"
              fontFamily="serif"
              style={{ fontWeight: 400 }}
            >
              𝄢
            </text>
          </g>
        )}

        {clef === 'do' && (
          <text
            x="36"
            y="76"
            fill="#059669"
            fontSize="48"
            fontFamily="serif"
            style={{ fontWeight: 400 }}
          >
            𝄡
          </text>
        )}

        {/* Ledger lines if needed */}
        {ledgerLine === -1 && (
          <line
            x1="180"
            y1="108"
            x2="230"
            y2="108"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
        {ledgerLine === 1 && (
          <line
            x1="180"
            y1="12"
            x2="230"
            y2="12"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}

        {/* Active Musical Note head */}
        {noteY !== null && (
          <g transform="translate(195, 0)">
            {/* Note head */}
            <ellipse
              cx="10"
              cy={noteY}
              rx="11"
              ry="8"
              transform={`rotate(-20 10 ${noteY})`}
              fill="#4f46e5"
              stroke="#312e81"
              strokeWidth="1.5"
            />
            {/* Note stem */}
            <line
              x1={noteY > 60 ? "19" : "1"}
              y1={noteY}
              x2={noteY > 60 ? "19" : "1"}
              y2={noteY > 60 ? noteY - 35 : noteY + 35}
              stroke="#312e81"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>

      {noteName && (
        <div className="mt-2 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-full border border-indigo-200">
            {noteName}
          </span>
        </div>
      )}
    </div>
  );
};
