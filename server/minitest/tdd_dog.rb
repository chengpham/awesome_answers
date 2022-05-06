require 'minitest/autorun'
class Dog
    def initialize()
        @bone_array = []
    end
    def give_bone(size)
        if @bone_array.count <= 3 and ['small', 'medium', 'large'].include?(size)
           @bone_array << size 
           return @bone_array[-1]
        end
    end
    def eat_bone
        return @bone_array.pop
    end
    def bone_count
        return @bone_array.count
    end
end
describe Dog do
    describe '.give_bone' do
        it "return bone given" do
            sparky = Dog.new
            value = sparky.give_bone("small")
            _(value).must_equal("small")
        end
    end
    describe '.eat_bone' do
        it 'return last bone' do
            sparky = Dog.new
            sparky.give_bone("medium")
            sparky.give_bone("large")
            value = sparky.eat_bone
            _(value).must_equal("large")
        end
    end
    describe '.bone_count'do
        it 'return count of bones' do
            sparky = Dog.new
            sparky.give_bone("small")
            sparky.give_bone("medium")
            sparky.give_bone("large")
            value = sparky.bone_count
            _(value).must_equal(3)
        end
    end 
end
