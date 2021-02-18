class FixedFloat:
    def __init__(self, amount):
        self.amount = amount

    def __repr__(self):
        return f'<FixedFloat {self.amount:.2f}>'

    @classmethod
    def from_sum(cls, v1, v2):
        return cls(v1 + v2)


number = FixedFloat(18.5746).from_sum(19.575, 0.789)
print(number)


class Euro(FixedFloat):
    def __init__(self, amount):
        super().__init__(amount)
        self.symbol = 'E'

    def __repr__(self):
        return f'<Euro {self.symbol}{self.amount:.2f}>'


money = Euro.from_sum(16.758, 9.999)
print(money)
