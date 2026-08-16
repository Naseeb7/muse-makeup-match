import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Muse — Makeup Match',description:'Find a makeup combination that makes sense for your skin, undertone, mood and finish.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
