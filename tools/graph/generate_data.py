import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Définir la période
date_start = datetime(2025, 11, 5)
date_end = datetime(2025, 11, 18)

# Générer les dates-heures toutes les 5 minutes
date_range = []
current_date = date_start
while current_date <= date_end:
    date_range.append(current_date)
    current_date += timedelta(minutes=5)

# Fonction pour générer un nombre aléatoire selon la plage horaire
def generate_random_value(dt):
    if 23 <= dt.hour or dt.hour < 5:
        return round(np.random.uniform(2.1, 2.3), 2)
    else:
        return round(np.random.uniform(3.9, 4.3), 2)

# Générer les données
data = {
    "Date-Heure": date_range,
    "Valeur": [generate_random_value(dt) for dt in date_range]
}

# Créer un DataFrame
df = pd.DataFrame(data)

# Sauvegarder en CSV
df.to_csv('données_simulées.csv', index=False, date_format='%Y-%m-%d %H:%M')

