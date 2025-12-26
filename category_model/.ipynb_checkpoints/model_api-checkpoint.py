import joblib
import pandas as pd

from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

MODEL_PATH = "transaction_classifier.pkl"
pipeline = joblib.load(MODEL_PATH)

app = FastAPI(title="Transaction_Category_Predictor_API")

class Transaction(BaseModel):
    description: str
    withdrawal: float
    deposit: float

class TransactionBatch(BaseModel):
    transactions: List[Transaction]

def predict_category(description, withdrawal, deposit):
    desc = description.lower()

    # Opening rule
    if withdrawal == 0 and deposit == 0:
        return "Opening"

    # Refund rule
    if "refund" in desc or "reversal" in desc:
        return "Adjustment"

    # ML prediction
    df = pd.DataFrame([{
        "Description": description,
        "Withdrawal": withdrawal,
        "Deposit": deposit
    }])

    return pipeline.predict(df)[0]


@app.post("/predict")
def predict_transaction(txn: Transaction):
    category = predict_category(
        txn.description,
        txn.withdrawal,
        txn.deposit
    )

    return {
        "description": txn.description,
        "withdrawal": txn.withdrawal,
        "deposit": txn.deposit,
        "predicted_category": category
    }

@app.post("/predict_batch")
def predict_transactions(batch: TransactionBatch):

    results = []

    for txn in batch.transactions:
        category = predict_category(
            txn.description,
            txn.withdrawal,
            txn.deposit
        )

        results.append({
            "description": txn.description,
            "withdrawal": txn.withdrawal,
            "deposit": txn.deposit,
            "predicted_category": category
        })

    return {"results": results}


