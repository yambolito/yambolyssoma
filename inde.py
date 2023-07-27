import tkinter as tk
from tkinter import messagebox, filedialog
from PIL import Image, ImageTk
import csv

# Función para guardar la información en un archivo CSV
def guardar_info():
    nombre = entry_nombre.get()
    area = entry_area.get()
    edad = entry_edad.get()
    fecha_ingreso = entry_fecha_ingreso.get()
    epps = ", ".join(epps_list)
    fecha_entrega = entry_fecha_entrega.get()

    with open('personal.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([nombre, area, edad, fecha_ingreso, epps, fecha_entrega])

    messagebox.showinfo("Guardado", "La información se ha guardado correctamente.")

# Función para buscar y mostrar la información del personal
def buscar_info():
    nombre_buscar = entry_buscar.get()
    with open('personal.csv', mode='r') as file:
        reader = csv.reader(file)
        for row in reader:
            if row[0] == nombre_buscar:
                info_window = tk.Toplevel(root)
                info_window.title("Información de Personal")

                img = Image.open(f"{nombre_buscar}.jpg")
                img = img.resize((150, 150), Image.ANTIALIAS)
                photo = ImageTk.PhotoImage(img)
                img_label = tk.Label(info_window, image=photo)
                img_label.photo = photo
                img_label.grid(row=0, column=0, columnspan=2, padx=10, pady=10)

                labels = ["Nombre completo:", "Área:", "Edad:", "Fecha de ingreso:", "EPPs:", "Fecha de entrega EPPs:"]
                data = row[:-1]
                epps_data = row[4].split(", ")
                data.append(", ".join(epps_data))

                for i in range(len(labels)):
                    label = tk.Label(info_window, text=labels[i])
                    label.grid(row=i+1, column=0, padx=5, pady=5)

                    data_label = tk.Label(info_window, text=data[i])
                    data_label.grid(row=i+1, column=1, padx=5, pady=5)

                break
        else:
            messagebox.showerror("Error", "El nombre no se encuentra en la base de datos.")

# Función para agregar un EPP
def agregar_epp():
    epp = entry_epp.get()
    if epp:
        epps_list.append(epp)
        epp_listbox.insert(tk.END, epp)
        entry_epp.delete(0, tk.END)

# Función para cargar una foto
def cargar_foto():
    file_path = filedialog.askopenfilename(filetypes=[("Image files", "*.png;*.jpg;*.jpeg")])
    if file_path:
        img = Image.open(file_path)
        img = img.resize((150, 150), Image.ANTIALIAS)
        photo = ImageTk.PhotoImage(img)
        img_label.configure(image=photo)
        img_label.photo = photo

# Configuración de la ventana principal
root = tk.Tk()
root.title("Buscador de Personal")

# Widgets para la ventana de búsqueda
label_buscar = tk.Label(root, text="Ingrese el nombre a buscar:")
label_buscar.pack(pady=5)

entry_buscar = tk.Entry(root)
entry_buscar.pack(pady=5)

buscar_button = tk.Button(root, text="Buscar", command=buscar_info)
buscar_button.pack(pady=5)

# Widgets para la ventana de visualización de datos
epps_list = []
info_window = None

label_ingrese_foto = tk.Label(root, text="Ingrese foto:")
label_ingrese_foto.pack(pady=5)

btn_cargar_foto = tk.Button(root, text="Cargar Foto", command=cargar_foto)
btn_cargar_foto.pack(pady=5)

label_nombre = tk.Label(root, text="Nombre completo:")
label_nombre.pack(pady=5)

entry_nombre = tk.Entry(root)
entry_nombre.pack(pady=5)

label_area = tk.Label(root, text="Área:")
label_area.pack(pady=5)

entry_area = tk.Entry(root)
entry_area.pack(pady=5)

label_edad = tk.Label(root, text="Edad:")
label_edad.pack(pady=5)

entry_edad = tk.Entry(root)
entry_edad.pack(pady=5)

label_fecha_ingreso = tk.Label(root, text="Fecha de ingreso:")
label_fecha_ingreso.pack(pady=5)

entry_fecha_ingreso = tk.Entry(root)
entry_fecha_ingreso.pack(pady=5)

label_epp = tk.Label(root, text="EPPs:")
label_epp.pack(pady=5)

entry_epp = tk.Entry(root)
entry_epp.pack(pady=5)

agregar_epp_button = tk.Button(root, text="Agregar EPP", command=agregar_epp)
agregar_epp_button.pack(pady=5)

epp_listbox = tk.Listbox(root, selectmode=tk.SINGLE)
epp_listbox.pack(pady=5)

label_fecha_entrega = tk.Label(root, text="Fecha de entrega EPPs:")
label_fecha_entrega.pack(pady=5)

entry_fecha_entrega = tk.Entry(root)
entry_fecha_entrega.pack(pady=5)

guardar_button = tk.Button(root, text="Guardar", command=guardar_info)
guardar_button.pack(pady=5)

img = Image.open("default.jpg")  # Imagen por defecto
img = img.resize((150, 150), Image.ANTIALIAS)
photo = ImageTk.PhotoImage(img)
img_label = tk.Label(root, image=photo)
img_label.photo = photo
img_label.pack(pady=10)

root.mainloop()