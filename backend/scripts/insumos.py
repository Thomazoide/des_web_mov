from pymongo import MongoClient
import random as r

cluster = MongoClient("mongodb+srv://Thomazoide:Thom1232!@mastercluster.hasjpif.mongodb.net/DataCenter")
db = cluster['DataCenter']
db.create_collection('insumos')
