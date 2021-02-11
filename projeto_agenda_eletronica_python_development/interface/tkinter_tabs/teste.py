import tkinter as tk
from tkinter import ttk

arquivo = open('nomes.txt', 'w')

root = tk.Tk()
root.title("Tab Widget")
root.geometry('600x400')
root.resizable(False, False)

tabControl = ttk.Notebook(root)

tab1 = ttk.Frame(tabControl)
tabControl.add(tab1, text='Tab 1')
ttk.Label(tab1, text="Welcome to GeeksForGeeks").grid(column=0, row=0, padx=30, pady=30)

tab2 = ttk.Frame(tabControl)
tabControl.add(tab2, text='Tab 2')
ttk.Label(tab2, text="Lets dive into the world of computers").grid(column=0, row=0, padx=30, pady=30)

tab3 = ttk.Frame(tabControl)
tabControl.add(tab3, text='Tab 3')
ttk.Label(tab3, text='mais uma aba').grid(column=0, row=0, padx=30, pady=30)

tabControl.pack(expand=1, fill="both")

arquivo.write('nova linha\n')

arquivo.close()
root.mainloop()
