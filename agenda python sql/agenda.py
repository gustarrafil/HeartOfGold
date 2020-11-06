import tkinter as tk
from tkinter import messagebox
from tkinter import filedialog
from tkinter import ttk
#from PIL import ImageTk, Image
#import pymysql
import os
import shutil
#import db_config
#from windows import set_dpi_awareness

##################################################

#set_dpi_awareness()

##################################################

raiz = tk.Tk()
raiz.geometry("800x500")
raiz.resizable(False, False)
raiz.title("Agenda eletrônica")

##################################################


container_pai = ttk.Notebook(raiz)

tab1 = ttk.Frame(container_pai)


greenbutton = ttk.Label(tab1, text="Brown", )
greenbutton.config(font=("Segoe UI", 20))
greenbutton.grid(column=10, row=0)

tab2 = ttk.Frame(container_pai)



label = ttk.Label(tab2, text="contato")
label.config(font=("Segoe UI", 20))
label.grid(column=0, row=0)

tab3 = ttk.Frame(container_pai)

container_pai.add(tab1, text="procurar")
container_pai.add(tab2, text="incluir")
container_pai.add(tab3, text="excluir")



container_pai.pack(expand=1, fill='both')





raiz.mainloop()