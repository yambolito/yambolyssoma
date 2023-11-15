import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import numpy as np

class IndicadoresApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Indicadores de Seguridad y Salud en el Trabajo")

        self.create_widgets()

    def create_widgets(self):
        # Crear etiquetas y cuadros de entrada para el año y mes
        self.label_year = ttk.Label(self.root, text="Año:")
        self.label_year.grid(row=0, column=0, padx=10, pady=10)
        self.entry_year = ttk.Entry(self.root)
        self.entry_year.grid(row=0, column=1, padx=10, pady=10)

        self.label_month = ttk.Label(self.root, text="Mes:")
        self.label_month.grid(row=1, column=0, padx=10, pady=10)
        self.entry_month = ttk.Entry(self.root)
        self.entry_month.grid(row=1, column=1, padx=10, pady=10)

        # Botón para calcular indicadores
        self.calculate_button = ttk.Button(self.root, text="Calcular Indicadores", command=self.calculate_indicators)
        self.calculate_button.grid(row=2, column=0, columnspan=2, pady=10)

    def calculate_indicators(self):
        try:
            # Obtener el año y mes ingresados
            year = int(self.entry_year.get())
            month = int(self.entry_month.get())

            # Aquí deberías agregar la lógica para calcular los indicadores
            # Puedes usar variables como 'year' y 'month' para realizar los cálculos

            # Ejemplo: Crear datos de ejemplo para graficar
            days = np.arange(1, 31)
            accidents = np.random.randint(0, 10, size=30)

            # Graficar los datos
            self.plot_graph(days, accidents)

        except ValueError:
            messagebox.showerror("Error", "Por favor, ingrese un año y mes válidos.")

    def plot_graph(self, x, y):
        # Crear una figura y un eje
        fig, ax = plt.subplots()

        # Graficar los datos
        ax.plot(x, y, label='Accidentes')

        # Configurar el gráfico
        ax.set_xlabel('Días del mes')
        ax.set_ylabel('Número de accidentes')
        ax.set_title('Indicadores de Seguridad y Salud en el Trabajo')

        # Agregar leyenda
        ax.legend()

        # Mostrar el gráfico en la interfaz gráfica
        canvas = FigureCanvasTkAgg(fig, master=self.root)
        canvas_widget = canvas.get_tk_widget()
        canvas_widget.grid(row=3, column=0, columnspan=2, pady=10)

if __name__ == "__main__":
    root = tk.Tk()
    app = IndicadoresApp(root)
    root.mainloop()