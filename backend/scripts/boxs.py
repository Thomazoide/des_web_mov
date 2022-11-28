from pymongo import MongoClient
cluster = MongoClient("mongodb+srv://Thomazoide:Thom1232!@mastercluster.hasjpif.mongodb.net/DataCenter")
db = cluster ["DataCenter"]
boxs = db["boxs"]

"""
Este script llena la coleccion de 'boxs' de la base de datos de mongoDB
'Data center'
"""

def insertarBoxs():
    temp_size = ""
    temp_cod = ""
    bx = []
    for x in range(12):
        temp_cod = "edd_prov"
        plantilla = {
            "size": "",
            "nro": "",
            "cod_sede": "",
            "tipoBox": "",
        }
        if(x <= 3):
            pl = plantilla
            temp_size = "pequeno"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "fonoaudiologia"
            bx.append(pl)
        if( x > 3 and x <= 7 ):
            pl = plantilla
            temp_size = "mediano"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "kinesiologia"
            bx.append(pl)
        if( x > 7 ):
            pl = plantilla
            temp_size = "grande"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "general"
            bx.append(pl)
    for x in range(12):
        temp_cod = "edd_sb"
        plantilla = {
            "size": "",
            "nro": "",
            "cod_sede": "",
            "tipoBox": "",
        }
        if(x <= 3):
            pl = plantilla
            temp_size = "pequeno"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "fonoaudiologia"
            bx.append(pl)
        if( x > 3 and x <= 7 ):
            pl = plantilla
            temp_size = "mediano"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "kinesiologia"
            bx.append(pl)
        if( x > 7 ):
            pl = plantilla
            temp_size = "grande"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "general"
            bx.append(pl)
    for x in range(12):
        temp_cod = "edd_ls"
        plantilla = {
            "size": "",
            "nro": "",
            "cod_sede": "",
            "tipoBox": "",
        }
        if(x <= 3):
            pl = plantilla
            temp_size = "pequeno"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "fonoaudiologia"
            bx.append(pl)
        if( x > 3 and x <= 7 ):
            pl = plantilla
            temp_size = "mediano"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "kinesiologia"
            bx.append(pl)
        if( x > 7 ):
            pl = plantilla
            temp_size = "grande"
            pl["size"] = temp_size
            pl["nro"] = str(x+1)
            pl["cod_sede"] = temp_cod
            pl["tipoBox"] = "general"
            bx.append(pl)
    for box in bx:
        boxs.insert_one(box)
        print('\n\n', box)
insertarBoxs()
