def encode_gid(type_name: str, db_id: str) -> str:
    return f"gid://pinksync/{type_name}/{db_id}"

def decode_gid(gid: str):
    # Example: gid://pinksync/Provider/123
    _, _, type_name, db_id = gid.split('/')
    return "pinksync", type_name, db_id

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
