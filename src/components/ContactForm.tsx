"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem"),
    };

    try {
      const response = await fetch("/enviar_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
        <input name="nome" required type="text" className="w-full bg-background border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="Seu nome" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">E-mail</label>
        <input name="email" required type="email" className="w-full bg-background border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="seu@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
        <textarea name="mensagem" required rows={4} className="w-full bg-background border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none" placeholder="Como posso ajudar?"></textarea>
      </div>
      
      {/* Mock do reCAPTCHA */}
      <div className="flex justify-center py-4">
        <div className="bg-gray-50 p-4 rounded border border-gray-200 flex items-center gap-4 max-w-[300px] w-full shadow-sm">
          <input type="checkbox" required className="w-6 h-6 cursor-pointer" />
          <span className="text-gray-800 text-sm font-medium flex-grow text-center">Não sou um robô</span>
          <div className="flex flex-col items-center">
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width="24" alt="reCAPTCHA" />
            <span className="text-[10px] text-gray-500 mt-1">reCAPTCHA</span>
          </div>
        </div>
      </div>

      <button type="submit" disabled={status === "loading"} className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all disabled:opacity-50">
        {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {status === "success" && (
        <p className="text-brand-green text-center mt-4 font-medium">Mensagem enviada com sucesso!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center mt-4 font-medium">Erro ao enviar. Tente novamente mais tarde.</p>
      )}
    </form>
  );
}
