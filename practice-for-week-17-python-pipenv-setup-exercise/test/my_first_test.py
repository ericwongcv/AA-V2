from hashlib import new
import pytest
from RegularPolygon import RegularPolygon

def testInitForErrorSideLessThanThree():
    with pytest.raises(Exception):
        RegularPolygon(2, 4)

def testInitForSides():
    newPoly = RegularPolygon(3, 4)
    assert newPoly.num_sides == 3

def testInitForlength():
    newPoly = RegularPolygon(3, 4)
    assert newPoly.length == 4

def testGetPerimeter():
    newPoly = RegularPolygon(3, 4)
    assert RegularPolygon.get_perimeter(newPoly) == 12
