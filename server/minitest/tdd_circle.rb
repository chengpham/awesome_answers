require 'minitest/autorun'
class Circle
    attr_accessor :radius
    def initialize(radius)
        @radius=radius
    end
    def diameter
        @radius * 2
    end
    def area
        Math::PI * (@radius ** 2)
    end
    def perimeter
        2 * Math::PI * @radius
    end
end
describe Circle do
    describe '.diameter' do
        it "return calculated diamter of the circle" do
            circ = Circle.new(3.2)
            value = circ.diameter
            _(value).must_equal(6.4)
        end
    end
    describe '.area' do
        it 'return calculated area of the circle' do
            circ = Circle.new(3.2)
            area = circ.area
            _(area).must_equal(32.169908772759484)
        end
    end
    describe '.perimeter'do
        it 'return the calculated perimeter of the circle' do
            rect = Circle.new(3.2)
            perm = rect.perimeter
            _(perm).must_equal(20.106192982974676)
        end
    end 
end