import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "The page you were looking for doesn’t exist.",
};

export default function GlobalNotFound() {
    return (
        <div>
            <h1>404 - Page not found</h1>
        </div>
    );
}