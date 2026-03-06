const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components', 'landing');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
    { from: /\bbg-black\b/g, to: 'bg-[var(--color-bg-primary)]' },
    { from: /\bbg-\[\#0A0A0A\]\b/g, to: 'bg-[var(--color-bg-primary)]' },
    { from: /\bbg-zinc-900\b/g, to: 'bg-[var(--color-bg-secondary)]' },
    { from: /\btext-white\b/g, to: 'text-[var(--color-text-primary)]' },
    { from: /\btext-slate-300\b/g, to: 'text-[var(--color-text-secondary)]' },
    { from: /\btext-slate-400\b/g, to: 'text-[var(--color-text-muted)]' },
    { from: /\btext-slate-500\b/g, to: 'text-[var(--color-text-muted)]' },
    { from: /\bborder-white\/10\b/g, to: 'border-[var(--color-glass-border)]' },
    { from: /\bborder-white\/20\b/g, to: 'border-[var(--color-glass-border)]' },
];

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    for (const { from, to } of replacements) {
        // Only replace inside className="..." strings? A simple search and replace usually works well enough if we are careful,
        // but a global replace on these utility classes is generally safe in JSX.
        content = content.replace(from, to);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}

console.log('Finalizado la sustitución global de utilidades.');
