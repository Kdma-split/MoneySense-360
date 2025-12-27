class RiskScorer:
    def __init__(self):
        self.growth_map = {
            "Slow": 0,
            "Balanced": 10,
            "Rapid": 20
        }

    def calculate_score(self, form: dict) -> int:
        score = 0

        # Age
        age = form["age"]
        if 18 <= age <= 25:
            score += 20
        elif 26 <= age <= 35:
            score += 15
        elif 36 <= age <= 45:
            score += 10
        elif 46 <= age <= 60:
            score += 5

        # Income
        income = form["income"]
        if income > 200000:
            score += 20
        elif income > 100000:
            score += 15
        elif income > 60000:
            score += 10
        elif income > 30000:
            score += 5

        # Dependents
        dep = form["dependants"]
        score += {0: 20, 1: 15, 2: 10, 3: 5}.get(dep, 0)

        # EMI burden
        emi = form["emi"]
        if emi < 15:
            score += 15
        elif emi <= 30:
            score += 10
        elif emi <= 50:
            score += 5

        # Growth preference
        score += self.growth_map.get(form["growth"], 0)

        return score

    def classify(self, score: int) -> str:
        if score <= 35:
            return "Conservative"
        elif score <= 65:
            return "Moderate"
        return "Aggressive"
