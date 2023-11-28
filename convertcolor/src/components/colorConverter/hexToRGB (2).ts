export function hexToRgb(hex: string): string | null {
    if (!/^#[0-9A-F]{6}$/i.test(hex)) {
      return null;
    }

    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `RGB(${r}, ${g}, ${b})`;
  }