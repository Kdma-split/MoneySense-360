class RiskProfileService:
    def __init__(self):
        self.scorer = RiskScorer()
        self.allocator = PortfolioAllocator()

    def generate_profile(self, form: dict) -> dict:
        score = self.scorer.calculate_score(form)
        risk_band = self.scorer.classify(score)
        portfolio = self.allocator.get_allocation(risk_band)

        return {
            "risk_score": score,
            "risk_band": risk_band,
            "portfolio_allocation": portfolio
        }
