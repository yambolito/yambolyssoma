import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt

def plot_indices():
    try:
        seguridad = float(seguridad_entry.get())
        salud = float(salud_entry.get())

        indices = ['Seguridad en el trabajo', 'Salud en el trabajo']
        valores = [seguridad, salud]

        plt.bar(indices, valores)
        plt.ylabel('Índices')
        plt.title('Índices de Gestión de Seguridad y Salud en el Trabajo')
        plt.show()

    except ValueError:
        tk.messagebox.showerror("Error", "Por favor, ingresa valores numéricos.")

# Crear ventana principal
root = tk.Tk()
root.title("Gráfico de Índices de Seguridad y Salud en el Trabajo")

# Etiquetas y campos de entrada
seguridad_label = ttk.Label(root, text="Índice de Seguridad en el trabajo:")
seguridad_label.pack(pady=5)
seguridad_entry = ttk.Entry(root)
seguridad_entry.pack(pady=5)

salud_label = ttk.Label(root, text="Índice de Salud en el trabajo:")
salud_label.pack(pady=5)
salud_entry = ttk.Entry(root)
salud_entry.pack(pady=5)

# Botón para graficar
plot_button = ttk.Button(root, text="Graficar", command=plot_indices)
plot_button.pack(pady=10)

# Iniciar el bucle principal de la interfaz gráfica
root.mainloop()