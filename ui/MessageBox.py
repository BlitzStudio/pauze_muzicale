import tkinter as tk
from tkinter import messagebox



root2 = tk.Tk()
root2.withdraw()

messagebox.showerror("Ati depasit numarul maxim de pauze!", "Numarul maxim de pauze este 16", master=root2)

root.mainloop()