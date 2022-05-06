require 'minitest/autorun'
class Student
    attr_accessor :full_name, :grade
    def initialize(first_name, last_name, score)
        @first_name = first_name
        @last_name = last_name
        @score = score
    end
    def full_name
        return "#{@first_name} #{@last_name}"
    end
    def grade
        if @score > 90
            return "A"
        elsif @score > 80
            return "B"
        elsif @score > 70 
            return "C+"
        elsif @score > 65 
            return "C"
        elsif @score > 60
            return "C-"
        elsif @score > 50
            return "D"
        else 
            return "F"
        end
    end
end
describe Student do
    describe '.full_name' do
        it "return the students full name" do
            john = Student.new("John", "Smith", 92)
            value = john.full_name
            _(value).must_equal("John Smith")
        end
    end
    describe '.grade' do
        it 'return students grade' do
            sam = Student.new("Sam", "Smith", 48)
            value = sam.grade
            _(value).must_equal("F")
        end
    end
    describe '.grade' do
        it 'return students grade' do
            bob = Student.new("Bobby", "Johns", 99)
            value2 = bob.grade
            _(value2).must_equal("A")
        end
    end
end