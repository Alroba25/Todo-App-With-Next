"use client";

import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6 font-sans">
        <div className="max-w-xl w-full flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
          {/* Icon Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
            <div className="relative w-28 h-28 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
          </div>

          {/* Titles */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Critical Error
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
              We encountered an unexpected problem. Our system has automatically
              logged this issue.
            </p>
          </div>

          {/* Details Box */}
          <div className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 w-full shadow-sm text-left overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Error Details
            </h2>
            <p className="font-mono text-sm text-zinc-800 dark:text-zinc-200 break-words">
              {error.message ||
                "An unknown error prevented the application from rendering."}
            </p>
            {error.digest && (
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <span className="font-semibold text-zinc-500">Digest:</span>{" "}
                  {error.digest}
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={() => reset()}
              className="w-full sm:w-auto bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600 dark:from-white dark:to-zinc-300 dark:hover:from-zinc-200 dark:hover:to-zinc-400 text-white dark:text-zinc-900 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <RefreshCcw className="w-5 h-5 mr-2" />
              Try Recovering
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/")}
              className="w-full sm:w-auto bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-700 dark:text-zinc-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
