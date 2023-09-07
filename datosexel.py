import tkinter as tk
from tkinter import ttk
from tkinter import filedialog
import pandas as pd

# Lista para almacenar los registros
registros = []

def nuevo_registro():
    # Obtener los datos de las entradas
    fecha = fecha_entry.get()
    apellidos_nombres = apellidos_nombres_entry.get()
    causa = causa_entry.get()
    puesto = puesto_entry.get()
    area_trabajo = area_trabajo_entry.get()
    tipo_accidente = tipo_accidente_var.get()
    dias_dm = dias_dm_entry.get()
    partes_cuerpo = partes_cuerpo_entry.get()
    sede = sede_var.get()
    numero_registro = numero_registro_entry.get()

    # Crear un nuevo registro y agregarlo a la lista
    nuevo_registro = (fecha, apellidos_nombres, causa, puesto, area_trabajo, tipo_accidente, dias_dm, partes_cuerpo, sede, numero_registro)
    registros.append(nuevo_registro)

    # Insertar los datos en la tabla
    tree.insert("", "end", values=nuevo_registro)

    # Limpiar las entradas
    fecha_entry.delete(0, tk.END)
    apellidos_nombres_entry.delete(0, tk.END)
    causa_entry.delete(0, tk.END)
    puesto_entry.delete(0, tk.END)
    area_trabajo_entry.delete(0, tk.END)
    tipo_accidente_var.set("")
    dias_dm_entry.delete(0, tk.END)
    partes_cuerpo_entry.delete(0, tk.END)
    sede_var.set("")
    numero_registro_entry.delete(0, tk.END)

def guardar_registro():
    # Aquí puedes implementar la lógica para guardar los registros en un archivo o base de datos
    # En este ejemplo, simplemente imprimiremos los datos en la consola
    for registro in registros:
        print(registro)

def modificar_registro():
    # Lógica para modificar el registro seleccionado
    selected_item = tree.selection()
    if selected_item:
        # Obtener el índice del registro seleccionado en la lista de registros
        index = tree.index(selected_item)
        
        # Obtener los datos del registro seleccionado en la tabla
        data = tree.item(selected_item)['values']

        # Actualizar los datos del registro en la lista
        registros[index] = (fecha_entry.get(), apellidos_nombres_entry.get(), causa_entry.get(),
                            puesto_entry.get(), area_trabajo_entry.get(), tipo_accidente_var.get(),
                            dias_dm_entry.get(), partes_cuerpo_entry.get(), sede_var.get(),
                            numero_registro_entry.get())

        # Actualizar los datos en la tabla
        tree.item(selected_item, values=registros[index])

        # Limpiar las entradas
        fecha_entry.delete(0, tk.END)
        apellidos_nombres_entry.delete(0, tk.END)
        causa_entry.delete(0, tk.END)
        puesto_entry.delete(0, tk.END)
        area_trabajo_entry.delete(0, tk.END)
        tipo_accidente_var.set("")
        dias_dm_entry.delete(0, tk.END)
        partes_cuerpo_entry.delete(0, tk.END)
        sede_var.set("")
        numero_registro_entry.delete(0, tk.END)

def eliminar_registro():
    # Lógica para eliminar el registro seleccionado
    selected_item = tree.selection()
    if selected_item:
        # Obtener el índice del registro seleccionado en la lista de registros
        index = tree.index(selected_item)

        # Eliminar el registro de la lista de registros
        del registros[index]

        # Eliminar el registro de la tabla
        tree.delete(selected_item)

def exportar_a_excel():
    # Obtener los datos de la tabla
    data = []
    for registro in registros:
        data.append(list(registro))

    # Mostrar el cuadro de diálogo para elegir el nombre del archivo
    file_path = filedialog.asksaveasfilename(defaultextension=".xlsx", filetypes=[("Archivo Excel", "*.xlsx")])

    # Verificar si se seleccionó un nombre de archivo
    if file_path:
        # Crear un DataFrame de pandas con los datos
        df = pd.DataFrame(data, columns=["Fecha", "Apellidos y Nombres", "Causa del Accidente", "Puesto", "Área de Trabajo", "Tipo de Accidente", "Días de DM", "Partes del Cuerpo Afectado", "Sede", "Número de Registro"])

        # Guardar el DataFrame en el archivo Excel seleccionado
        df.to_excel(file_path, index=False)

def buscar_registro():
    # Obtener el nombre a buscar
    nombre_a_buscar = buscar_nombre_entry.get()

    # Limpiar la tabla
    for item in tree.get_children():
        tree.delete(item)

    # Mostrar solo los registros que coinciden con el nombre
    for registro in registros:
        if nombre_a_buscar in registro[1]:  # El nombre está en la posición 1 (índice 1) del registro
            tree.insert("", "end", values=registro)

# Crear una ventana principal
root = tk.Tk()
root.title("Registro de Accidentes Laborales")

# Crear un cuadro de texto para mostrar los registros
tree = ttk.Treeview(root, columns=("Fecha", "Apellidos y Nombres", "Causa del Accidente", "Puesto", "Área de Trabajo", "Tipo de Accidente", "Días de DM", "Partes del Cuerpo Afectado", "Sede"), show="headings")

# Configurar las columnas
tree.heading("Fecha", text="Fecha")
tree.heading("Apellidos y Nombres", text="Apellidos y Nombres")
tree.heading("Causa del Accidente", text="Causa del Accidente")
tree.heading("Puesto", text="Puesto")
tree.heading("Área de Trabajo", text="Área de Trabajo")
tree.heading("Tipo de Accidente", text="Tipo de Accidente")
tree.heading("Días de DM", text="Días de DM")
tree.heading("Partes del Cuerpo Afectado", text="Partes del Cuerpo Afectado")
tree.heading("Sede", text="Sede")

# Crear entradas y desplegables para ingresar datos
fecha_entry = tk.Entry(root)
apellidos_nombres_entry = tk.Entry(root)
causa_entry = tk.Entry(root)
puesto_entry = tk.Entry(root)
area_trabajo_entry = tk.Entry(root)
tipo_accidente_var = tk.StringVar()
tipo_accidente_combobox = ttk.Combobox(root, textvariable=tipo_accidente_var, values=["Accidente Leve", "Accidente Grave", "Incidente"])
dias_dm_entry = tk.Entry(root)
partes_cuerpo_entry = tk.Entry(root)
sede_var = tk.StringVar()
sede_combobox = ttk.Combobox(root, textvariable=sede_var, values=["Chiclayo", "Arequipa", "Lima"])
numero_registro_entry = tk.Entry(root)
buscar_nombre_entry = tk.Entry(root)

# Crear etiquetas para los campos
fecha_label = tk.Label(root, text="Fecha:")
apellidos_nombres_label = tk.Label(root, text="Apellidos y Nombres:")
causa_label = tk.Label(root, text="Causa del Accidente:")
puesto_label = tk.Label(root, text="Puesto:")
area_trabajo_label = tk.Label(root, text="Área de Trabajo:")
tipo_accidente_label = tk.Label(root, text="Tipo de Accidente:")
dias_dm_label = tk.Label(root, text="Días de DM:")
partes_cuerpo_label = tk.Label(root, text="Partes del Cuerpo Afectado:")
sede_label = tk.Label(root, text="Sede:")
numero_registro_label = tk.Label(root, text="Número de Registro:")
buscar_nombre_label = tk.Label(root, text="Buscar por Nombre:")

# Crear botones
nuevo_btn = tk.Button(root, text="Nuevo", command=nuevo_registro)
guardar_btn = tk.Button(root, text="Guardar", command=guardar_registro)
modificar_btn = tk.Button(root, text="Modificar", command=modificar_registro)
eliminar_btn = tk.Button(root, text="Eliminar", command=eliminar_registro)
exportar_btn = tk.Button(root, text="Exportar a Excel", command=exportar_a_excel)
buscar_btn = tk.Button(root, text="Buscar", command=buscar_registro)  # Botón para buscar

# Colocar widgets en la ventana
fecha_label.grid(row=0, column=0)
apellidos_nombres_label.grid(row=1, column=0)
causa_label.grid(row=2, column=0)
puesto_label.grid(row=3, column=0)
area_trabajo_label.grid(row=4, column=0)
tipo_accidente_label.grid(row=5, column=0)
dias_dm_label.grid(row=6, column=0)
partes_cuerpo_label.grid(row=7, column=0)
sede_label.grid(row=8, column=0)
numero_registro_label.grid(row=9, column=0)
buscar_nombre_label.grid(row=10, column=0)

fecha_entry.grid(row=0, column=1)
apellidos_nombres_entry.grid(row=1, column=1)
causa_entry.grid(row=2, column=1)
puesto_entry.grid(row=3, column=1)
area_trabajo_entry.grid(row=4, column=1)
tipo_accidente_combobox.grid(row=5, column=1)
dias_dm_entry.grid(row=6, column=1)
partes_cuerpo_entry.grid(row=7, column=1)
sede_combobox.grid(row=8, column=1)
numero_registro_entry.grid(row=9, column=1)
buscar_nombre_entry.grid(row=10, column=1)

nuevo_btn.grid(row=11, column=0)
guardar_btn.grid(row=11, column=1)
modificar_btn.grid(row=11, column=2)
eliminar_btn.grid(row=11, column=3)
exportar_btn.grid(row=11, column=4)
buscar_btn.grid(row=10, column=2)  # Botón de búsqueda

tree.grid(row=12, columnspan=6)

# Iniciar la aplicación
root.mainloop()