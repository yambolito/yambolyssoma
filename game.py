import tkinter as tk
import time

class AdventureGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Aventura en el Bosque")
        self.root.geometry("400x300")

        self.canvas = tk.Canvas(self.root, bg="white", width=400, height=300)
        self.canvas.pack()

        self.intro()
        self.draw_text("Selecciona tu camino:", 200, 100)

        self.button_left = tk.Button(self.root, text="Camino de la izquierda", command=self.left_path)
        self.button_left.pack(side=tk.LEFT)

        self.button_right = tk.Button(self.root, text="Camino de la derecha", command=self.right_path)
        self.button_right.pack(side=tk.RIGHT)

    def intro(self):
        self.draw_text("¡Bienvenido a la emocionante aventura!", 200, 50)
        time.sleep(1)
        self.draw_text("Estás en un oscuro y misterioso bosque.", 200, 80)
        time.sleep(1)
        self.draw_text("Debes elegir tu camino y enfrentar los desafíos que te esperan.", 200, 110)
        time.sleep(1)
        self.draw_text("¿Estás listo? ¡Comencemos!", 200, 140)

    def draw_text(self, text, x, y):
        self.canvas.create_text(x, y, text=text, font=("Arial", 12), fill="black")

    def left_path(self):
        self.clear_canvas()
        self.draw_text("Caminas por el oscuro y estrecho camino de la izquierda.", 200, 100)
        time.sleep(1)
        self.draw_text("Te encuentras con un feroz dragón.", 200, 130)
        time.sleep(1)
        self.draw_text("¡Oh no! ¡El dragón te ataca!", 200, 160)
        time.sleep(1)
        self.draw_text("FIN DEL JUEGO: El dragón te ha derrotado.", 200, 190)

    def right_path(self):
        self.clear_canvas()
        self.draw_text("Tomas el camino de la derecha y llegas a un río caudaloso.", 200, 100)
        time.sleep(1)
        self.draw_text("¿Qué decides hacer?", 200, 130)

        self.button_swim = tk.Button(self.root, text="Cruzar el río nadando", command=self.swim_river)
        self.button_swim.pack(side=tk.LEFT)

        self.button_bridge = tk.Button(self.root, text="Buscar un puente para cruzar", command=self.bridge_river)
        self.button_bridge.pack(side=tk.RIGHT)

    def swim_river(self):
        self.clear_canvas()
        self.draw_text("Decides cruzar el río nadando.", 200, 100)
        time.sleep(1)
        self.draw_text("Logras cruzar con éxito.", 200, 130)
        time.sleep(1)
        self.draw_text("¡Felicidades! Has superado el desafío y completado la aventura.", 200, 160)

    def bridge_river(self):
        self.clear_canvas()
        self.draw_text("Decides buscar un puente para cruzar el río.", 200, 100)
        time.sleep(1)
        self.draw_text("Encuentras un puente seguro y logras cruzar sin problemas.", 200, 130)
        time.sleep(1)
        self.draw_text("¡Felicidades! Has superado el desafío y completado la aventura.", 200, 160)

    def clear_canvas(self):
        self.canvas.delete("all")

if __name__ == "__main__":
    root = tk.Tk()
    game = AdventureGame(root)
    root.mainloop()