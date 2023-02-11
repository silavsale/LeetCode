import tkinter as tk

def key_press(event):
    print("Key pressed:", event.keysym)

root = tk.Tk()
root.bind("<Key>", key_press)
root.mainloop()