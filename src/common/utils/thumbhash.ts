import { thumbHashToDataURL } from "thumbhash";

export default function getThumbHashUrl(base64: string) {
  const binary = atob(base64);

  const thumbHashBytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    thumbHashBytes[i] = binary.charCodeAt(i);
  }

  return thumbHashToDataURL(thumbHashBytes);
}
