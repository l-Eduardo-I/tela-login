import "./globals.css"

//Estrutura Base para o funcionamento das paginas 
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
                </body>
        </html>
    );
}
 