let AndOperators = {
   mainComparison1: (true && true), //result is true  
   mainComparison2: (false && true), //result is false
   mainComparison3: (true && false), //result is false
   mainComparison4: (false && false), //result is false

   pluralComparison1: (true && true && true) //result return last true
   pluralComparison2: (true && false && true) //result return second value(false)
   pluralComparison3: (true && false && false) //result return second value(false)
   pluralComparison4: (false && false && true) //result return first value(false)

};

let OrOperators = {
   mainComparison1: (true || true), //result is true  
   mainComparison2: (false || true), //result is true
   mainComparison3: (true || false), //result is true
   mainComparison4: (false || false), //result is false

   pluralComparison1: (true || true || true) //result return first true
   pluralComparison2: (true || false || true) //result return first value(true)
   pluralComparison3: (true || false || false) //result return first value(true)
   pluralComparison4: (false || false || false) //result return last value( last false)

};
