'use client'
import DataDashboard from './components/DataDashboard';
import { ThemeProvider } from './components/ThemeContext'; // Import ThemeProvider

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col">
        <DataDashboard />
      </main>
    </ThemeProvider>
  );
}