# app.py
import streamlit as st
import pandas as pd
import plotly.express as px
from datetime import datetime

# Function to load sample data (replace it with your database connection and query)
def load_data():
    data = {
        'studentId': ['1', '2', '3', '4', '5', '6'],
        'score': [20, 5, 10, 15, 10, 20],
        'date': ['2022-11-01', '2022-11-02', '2022-11-03', '2022-11-04', '2022-11-05', '2022-11-06']
    }
    df = pd.DataFrame(data)
    df['date'] = pd.to_datetime(df['date'])
    return df

# Load data
scores_df = load_data()

# Streamlit app
st.title('Student Progress Graph')

# Display the raw data
# st.subheader('Raw Data')
# st.dataframe(scores_df)

# Create a line chart
st.subheader('Progress Over Time')
fig = px.line(scores_df, x='date', y='score', markers=True)
st.plotly_chart(fig)
