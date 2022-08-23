from cgitb import reset
from app.roman_numerals import parse
from pytest import mark

# def test_roman_numeral_parser():
    # result = parse("IX")

    # assert result == 9

# using tuple
@mark.parametrize("v, expected", [("IX", 9), ("X", 10), ("XI", 11), ("XIV", 14), ("XIX", 19), ("XX", 20), \
    ("XXXIV", 34), ("XLI", 41), ("L", 50), ("XCIX", 99), ("C", 100), ("CCCXXXIII", 333), ("DLV", 555), ("CDXLIX", 449), ("MCMLXXII", 1972)])
def test_roman_numeral_parser(v, expected):
    result = parse(v)

    assert result == expected
