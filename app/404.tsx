'use client'

export default function Custom404() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Número de error animado */}
      <div className="relative">
        <h1 className="text-[12rem] md:text-[20rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-[float_6s_ease-in-out_infinite] select-none">
          404
        </h1>
      </div>

      {/* Mensaje de error */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 mt-8 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
        ¡Oops! Página no encontrada
      </h2>
      
      {/* Descripción */}
      <p className="text-gray-400 text-center max-w-md mb-8">
        Parece que te has perdido en el espacio digital. La página que buscas no existe o ha sido movida a otra dimensión.
      </p>

      {/* Botón de regreso */}
      <button 
        onClick={() => window.history.back()}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 text-white font-medium"
      >
        Regresar
      </button>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-bounce" />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent rounded-full animate-ping" />
      </div>
    </main>
  );
} 