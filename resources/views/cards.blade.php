<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Kaartenspel SVG</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      margin: 24px;
      background: #f5f5f5;
    }
    h1 { color: #333; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 12px;
      margin-top: 20px;
    }
    figure {
      margin: 0;
      text-align: center;
      background: white;
      padding: 8px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    svg { width: 84px; height: auto; display: block; margin: 0 auto; }
    figcaption {
      font-size: 11px;
      color: #666;
      margin-top: 6px;
      word-break: break-word;
    }
  </style>
</head>
<body>
  <h1>🎴 Kaartenspel (SVG)</h1>
  <p>Alle speelkaarten gemaakt met SVG. Je kunt deze kaarten in je Laravel app gebruiken.</p>
  
  <div class="grid" id="cards"></div>

  <script>
    const mapping = {
      clubs: 'club',
      diamonds: 'diamond',
      hearts: 'heart',
      spades: 'spade'
    };
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    const container = document.getElementById('cards');

    for (const s of suits) {
      for (const r of ranks) {
        const fig = document.createElement('figure');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '84');
        svg.setAttribute('height', '122');
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        const id = `${mapping[s]}_${r}`;
        use.setAttribute('href', `{{ asset('svg-cards.svg') }}#${id}`);
        svg.appendChild(use);
        const cap = document.createElement('figcaption');
        cap.textContent = id;
        fig.appendChild(svg);
        fig.appendChild(cap);
        container.appendChild(fig);
      }
    }
  </script>
</body>
</html>