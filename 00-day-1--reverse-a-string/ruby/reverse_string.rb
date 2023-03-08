def reverse_string(str)
  reversed_str = ""
  str.each_char { |c| reversed_str = c + reversed_str }
  reversed_str
  # type your code in here
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts  "hi ","=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "catbaby ","=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution