const localQuotes= [
        {
          "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
          "author": "Thomas Edison"
        },
        {
          "text": "You can observe a lot just by watching.",
          "author": "Yogi Berra"
        },
        {
          "text": "A house divided against itself cannot stand.",
          "author": "Abraham Lincoln"
        },
        {
          "text": "Difficulties increase the nearer we get to the goal.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Fate is in your hands and no one elses",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Be the chief but never the lord.",
          "author": "Lao Tzu"
        },
        {
          "text": "Nothing happens unless first we dream.",
          "author": "Carl Sandburg"
        },
        {
          "text": "Well begun is half done.",
          "author": "Aristotle"
        },
        {
          "text": "Life is a learning experience, only if you learn.",
          "author": "Yogi Berra"
        },
        {
          "text": "Self-complacency is fatal to progress.",
          "author": "Margaret Sangster"
        },
        {
          "text": "Peace comes from within. Do not seek it without.",
          "author": "Buddha"
        },
        {
          "text": "What you give is what you get.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "We can only learn to love by loving.",
          "author": "Iris Murdoch"
        },
        {
          "text": "Life is change. Growth is optional. Choose wisely.",
          "author": "Karen Clark"
        },
        {
          "text": "You'll see it when you believe it.",
          "author": "Wayne Dyer"
        },
        {
          "text": "Today is the tomorrow we worried about yesterday.",
          "author": null
        },
        {
          "text": "It's easier to see the mistakes on someone else's paper.",
          "author": null
        },
        {
          "text": "Every man dies. Not every man really lives.",
          "author": null
        },
        {
          "text": "To lead people walk behind them.",
          "author": "Lao Tzu"
        },
        {
          "text": "Having nothing, nothing can he lose.",
          "author": "William Shakespeare"
        },
        {
          "text": "Trouble is only opportunity in work clothes.",
          "author": "Henry J. Kaiser"
        },
        {
          "text": "A rolling stone gathers no moss.",
          "author": "Publilius Syrus"
        },
        {
          "text": "Ideas are the beginning points of all fortunes.",
          "author": "Napoleon Hill"
        },
        {
          "text": "Everything in life is luck.",
          "author": "Donald Trump"
        },
        {
          "text": "Doing nothing is better than being busy doing nothing.",
          "author": "Lao Tzu"
        },
        {
          "text": "Trust yourself. You know more than you think you do.",
          "author": "Benjamin Spock"
        },
        {
          "text": "Study the past, if you would divine the future.",
          "author": "Confucius"
        },
        {
          "text": "The day is already blessed, find peace within it.",
          "author": null
        },
        {
          "text": "From error to error one discovers the entire truth.",
          "author": "Sigmund Freud"
        },
        {
          "text": "Well done is better than well said.",
          "author": "Benjamin Franklin"
        },
        {
          "text": "Bite off more than you can chew, then chew it.",
          "author": "Ella Williams"
        },
        {
          "text": "Work out your own salvation. Do not depend on others.",
          "author": "Buddha"
        },
        {
          "text": "One today is worth two tomorrows.",
          "author": "Benjamin Franklin"
        },
        {
          "text": "Once you choose hope, anythings possible.",
          "author": "Christopher Reeve"
        },
        {
          "text": "God always takes the simplest way.",
          "author": "Albert Einstein"
        },
        {
          "text": "One fails forward toward success.",
          "author": "Charles Kettering"
        },
        {
          "text": "From small beginnings come great things.",
          "author": null
        },
        {
          "text": "Learning is a treasure that will follow its owner everywhere",
          "author": "Chinese proverb"
        },
        {
          "text": "Be as you wish to seem.",
          "author": "Socrates"
        },
        {
          "text": "The world is always in movement.",
          "author": "V. Naipaul"
        },
        {
          "text": "Never mistake activity for achievement.",
          "author": "John Wooden"
        },
        {
          "text": "What worries you masters you.",
          "author": "Haddon Robinson"
        },
        {
          "text": "One faces the future with ones past.",
          "author": "Pearl Buck"
        },
        {
          "text": "Goals are the fuel in the furnace of achievement.",
          "author": "Brian Tracy"
        },
        {
          "text": "Who sows virtue reaps honour.",
          "author": "Leonardo da Vinci"
        },
        {
          "text": "Be kind whenever possible. It is always possible.",
          "author": "Dalai Lama"
        },
        {
          "text": "Talk doesn't cook rice.",
          "author": "Chinese proverb"
        },
        {
          "text": "He is able who thinks he is able.",
          "author": "Buddha"
        },
        {
          "text": "A goal without a plan is just a wish.",
          "author": "Larry Elder"
        },
        {
          "text": "To succeed, we must first believe that we can.",
          "author": "Michael Korda"
        },
        {
          "text": "Learn from yesterday, live for today, hope for tomorrow.",
          "author": "Albert Einstein"
        },
        {
          "text": "A weed is no more than a flower in disguise.",
          "author": "James Lowell"
        },
        {
          "text": "Do, or do not. There is no try.",
          "author": "Yoda"
        },
        {
          "text": "All serious daring starts from within.",
          "author": "Harriet Beecher Stowe"
        },
        {
          "text": "The best teacher is experience learned from failures.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Think how hard physics would be if particles could think.",
          "author": "Murray Gell-Mann"
        },
        {
          "text": "Love is the flower you've got to let grow.",
          "author": "John Lennon"
        },
        {
          "text": "Don't wait. The time will never be just right.",
          "author": "Napoleon Hill"
        },
        {
          "text": "Time is the wisest counsellor of all.",
          "author": "Pericles"
        },
        {
          "text": "You give before you get.",
          "author": "Napoleon Hill"
        },
        {
          "text": "Wisdom begins in wonder.",
          "author": "Socrates"
        },
        {
          "text": "Without courage, wisdom bears no fruit.",
          "author": "Baltasar Gracian"
        },
        {
          "text": "Change in all things is sweet.",
          "author": "Aristotle"
        },
        {
          "text": "What you fear is that which requires action to overcome.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "When performance exceeds ambition, the overlap is called success.",
          "author": "Cullen Hightower"
        },
        {
          "text": "When deeds speak, words are nothing.",
          "author": "African proverb"
        },
        {
          "text": "Real magic in relationships means an absence of judgement of others.",
          "author": "Wayne Dyer"
        },
        {
          "text": "I never think of the future. It comes soon enough.",
          "author": "Albert Einstein"
        },
        {
          "text": "Skill to do comes of doing.",
          "author": "Ralph Emerson"
        },
        {
          "text": "Wisdom is the supreme part of happiness.",
          "author": "Sophocles"
        },
        {
          "text": "I believe that every person is born with talent.",
          "author": "Maya Angelou"
        },
        {
          "text": "Important principles may, and must, be inflexible.",
          "author": "Abraham Lincoln"
        },
        {
          "text": "The undertaking of a new action brings new strength.",
          "author": "Richard Evans"
        },
        {
          "text": "The years teach much which the days never know.",
          "author": "Ralph Emerson"
        },
        {
          "text": "Our distrust is very expensive.",
          "author": "Ralph Emerson"
        },
        {
          "text": "All know the way; few actually walk it.",
          "author": "Bodhidharma"
        },
        {
          "text": "Great talent finds happiness in execution.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Faith in oneself is the best and safest course.",
          "author": "Michelangelo"
        },
        {
          "text": "Courage is going from failure to failure without losing enthusiasm.",
          "author": "Winston Churchill"
        },
        {
          "text": "The two most powerful warriors are patience and time.",
          "author": "Leo Tolstoy"
        },
        {
          "text": "Anticipate the difficult by managing the easy.",
          "author": "Lao Tzu"
        },
        {
          "text": "Those who are free of resentful thoughts surely find peace.",
          "author": "Buddha"
        },
        {
          "text": "A short saying often contains much wisdom.",
          "author": "Sophocles"
        },
        {
          "text": "It takes both sunshine and rain to make a rainbow.",
          "author": null
        },
        {
          "text": "A beautiful thing is never perfect.",
          "author": null
        },
        {
          "text": "Only do what your heart tells you.",
          "author": "Princess Diana"
        },
        {
          "text": "Life is movement-we breathe, we eat, we walk, we move!",
          "author": "John Pierrakos"
        },
        {
          "text": "No one can make you feel inferior without your consent.",
          "author": "Eleanor Roosevelt"
        },
        {
          "text": "Argue for your limitations, and sure enough theyre yours.",
          "author": "Richard Bach"
        },
        {
          "text": "Luck is what happens when preparation meets opportunity.",
          "author": "Seneca"
        },
        {
          "text": "Victory belongs to the most persevering.",
          "author": "Napoleon Bonaparte"
        },
        {
          "text": "Love all, trust a few, do wrong to none.",
          "author": "William Shakespeare"
        },
        {
          "text": "In order to win, you must expect to win.",
          "author": "Richard Bach"
        },
        {
          "text": "A goal is a dream with a deadline.",
          "author": "Napoleon Hill"
        },
        {
          "text": "You can do it if you believe you can!",
          "author": "Napoleon Hill"
        },
        {
          "text": "Set your goals high, and don't stop till you get there.",
          "author": "Bo Jackson"
        },
        {
          "text": "Every new day is another chance to change your life.",
          "author": null
        },
        {
          "text": "Smile, breathe, and go slowly.",
          "author": "Thich Nhat Hanh"
        },
        {
          "text": "Nobody will believe in you unless you believe in yourself.",
          "author": "Liberace"
        },
        {
          "text": "Do more than dream: work.",
          "author": "William Arthur Ward"
        },
        {
          "text": "No man was ever wise by chance.",
          "author": "Seneca"
        },
        {
          "text": "Some pursue happiness, others create it.",
          "author": null
        },
        {
          "text": "He that is giddy thinks the world turns round.",
          "author": "William Shakespeare"
        },
        {
          "text": "Don't ruin the present with the ruined past.",
          "author": "Ellen Gilchrist"
        },
        {
          "text": "Do something wonderful, people may imitate it.",
          "author": "Albert Schweitzer"
        },
        {
          "text": "We do what we do because we believe.",
          "author": null
        },
        {
          "text": "Do one thing every day that scares you.",
          "author": "Eleanor Roosevelt"
        },
        {
          "text": "If you cannot be silent be brilliant and thoughtful.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Who looks outside, dreams; who looks inside, awakes.",
          "author": "Carl Jung"
        },
        {
          "text": "What we think, we become.",
          "author": "Buddha"
        },
        {
          "text": "The shortest answer is doing.",
          "author": "Lord Herbert"
        },
        {
          "text": "All our knowledge has its origins in our perceptions.",
          "author": "Leonardo da Vinci"
        },
        {
          "text": "The harder you fall, the higher you bounce.",
          "author": null
        },
        {
          "text": "Trusting our intuition often saves us from disaster.",
          "author": "Anne Wilson Schaef"
        },
        {
          "text": "Truth is powerful and it prevails.",
          "author": "Sojourner Truth"
        },
        {
          "text": "Light tomorrow with today!",
          "author": "Elizabeth Browning"
        },
        {
          "text": "Silence is a fence around wisdom.",
          "author": "German proverb"
        },
        {
          "text": "Society develops wit, but its contemplation alone forms genius.",
          "author": "Madame de Stael"
        },
        {
          "text": "The simplest things are often the truest.",
          "author": "Richard Bach"
        },
        {
          "text": "Everyone smiles in the same language.",
          "author": null
        },
        {
          "text": "Yesterday I dared to struggle. Today I dare to win.",
          "author": "Bernadette Devlin"
        },
        {
          "text": "No alibi will save you from accepting the responsibility.",
          "author": "Napoleon Hill"
        },
        {
          "text": "If you can dream it, you can do it.",
          "author": "Walt Disney"
        },
        {
          "text": "It is better to travel well than to arrive.",
          "author": "Buddha"
        },
        {
          "text": "Life shrinks or expands in proportion to one's courage.",
          "author": "Anais Nin"
        },
        {
          "text": "You have to believe in yourself.",
          "author": "Sun Tzu"
        },
        {
          "text": "Our intention creates our reality.",
          "author": "Wayne Dyer"
        },
        {
          "text": "Silence is a true friend who never betrays.",
          "author": "Confucius"
        },
        {
          "text": "Character develops itself in the stream of life.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "From little acorns mighty oaks do grow.",
          "author": "American proverb"
        },
        {
          "text": "You can't stop the waves, but you can learn to surf.",
          "author": "Jon Kabat-Zinn"
        },
        {
          "text": "Reality does not conform to the ideal, but confirms it.",
          "author": "Gustave Flaubert"
        },
        {
          "text": "Speak low, if you speak love.",
          "author": "William Shakespeare"
        },
        {
          "text": "A really great talent finds its happiness in execution.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Reality leaves a lot to the imagination.",
          "author": "John Lennon"
        },
        {
          "text": "The greatest remedy for anger is delay.",
          "author": "Seneca"
        },
        {
          "text": "Growth itself contains the germ of happiness.",
          "author": "Pearl Buck"
        },
        {
          "text": "You can do what's reasonable or you can decide what's possible.",
          "author": null
        },
        {
          "text": "Nothing strengthens authority so much as silence.",
          "author": "Leonardo da Vinci"
        },
        {
          "text": "Wherever you go, go with all your heart.",
          "author": "Confucius"
        },
        {
          "text": "The only real valuable thing is intuition.",
          "author": "Albert Einstein"
        },
        {
          "text": "Good luck is another name for tenacity of purpose.",
          "author": "Ralph Emerson"
        },
        {
          "text": "Rainbows apologize for angry skies.",
          "author": "Sylvia Voirol"
        },
        {
          "text": "Friendship isn't a big thing. It's a million little things.",
          "author": null
        },
        {
          "text": "Time is the most valuable thing a man can spend.",
          "author": "Theophrastus"
        },
        {
          "text": "Whatever happens, take responsibility.",
          "author": "Tony Robbins"
        },
        {
          "text": "Experience is simply the name we give our mistakes.",
          "author": "Oscar Wilde"
        },
        {
          "text": "I think and that is all that I am.",
          "author": "Wayne Dyer"
        },
        {
          "text": "A good plan today is better than a perfect plan tomorrow.",
          "author": null
        },
        {
          "text": "If the shoe doesn't fit, must we change the foot?",
          "author": "Gloria Steinem"
        },
        {
          "text": "Each day provides its own gifts.",
          "author": "Marcus Aurelius"
        },
        {
          "text": "While we stop to think, we often miss our opportunity.",
          "author": "Publilius Syrus"
        },
        {
          "text": "Life isn't about finding yourself. Life is about creating yourself.",
          "author": "Bernard Shaw"
        },
        {
          "text": "To bring anything into your life, imagine that it's already there.",
          "author": "Richard Bach"
        },
        {
          "text": "Begin to weave and God will give you the thread.",
          "author": "German proverb"
        },
        {
          "text": "The more you know yourself, the more you forgive yourself.",
          "author": "Confucius"
        },
        {
          "text": "Someone remembers, someone cares; your name is whispered in someone's prayers.",
          "author": null
        },
        {
          "text": "Without faith, nothing is possible. With it, nothing is impossible.",
          "author": "Mary Bethune"
        },
        {
          "text": "Once we accept our limits, we go beyond them.",
          "author": "Albert Einstein"
        },
        {
          "text": "Don't be pushed by your problems; be led by your dreams.",
          "author": null
        },
        {
          "text": "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
          "author": "Brian Tracy"
        },
        {
          "text": "Everything you can imagine is real.",
          "author": "Pablo Picasso"
        },
        {
          "text": "Fear is a darkroom where negatives develop.",
          "author": "Usman Asif"
        },
        {
          "text": "The truest wisdom is a resolute determination.",
          "author": "Napoleon Bonaparte"
        },
        {
          "text": "Life is the flower for which love is the honey.",
          "author": "Victor Hugo"
        },
        {
          "text": "Freedom is the right to live as we wish.",
          "author": "Epictetus"
        },
        {
          "text": "Change your thoughts, change your life!",
          "author": null
        },
        {
          "text": "Never ignore a gut feeling, but never believe that it's enough.",
          "author": "Robert Heller"
        },
        {
          "text": "Loss is nothing else but change,and change is Natures delight.",
          "author": "Marcus Aurelius"
        },
        {
          "text": "Someone is special only if you tell them.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Today is the tomorrow you worried about yesterday.",
          "author": null
        },
        {
          "text": "There is no way to happiness, happiness is the way.",
          "author": "Thich Nhat Hanh"
        },
        {
          "text": "The day always looks brighter from behind a smile.",
          "author": null
        },
        {
          "text": "A stumble may prevent a fall.",
          "author": null
        },
        {
          "text": "He who talks more is sooner exhausted.",
          "author": "Lao Tzu"
        },
        {
          "text": "He who is contented is rich.",
          "author": "Lao Tzu"
        },
        {
          "text": "What we achieve inwardly will change outer reality.",
          "author": "Plutarch"
        },
        {
          "text": "Our strength grows out of our weaknesses.",
          "author": "Ralph Waldo Emerson"
        },
        {
          "text": "We must become the change we want to see.",
          "author": "Mahatma Gandhi"
        },
        {
          "text": "Happiness is found in doing, not merely possessing.",
          "author": "Napoleon Hill"
        },
        {
          "text": "Put your future in good hands your own.",
          "author": null
        },
        {
          "text": "We choose our destiny in the way we treat others.",
          "author": "Wit"
        },
        {
          "text": "No snowflake in an avalanche ever feels responsible.",
          "author": "Voltaire"
        },
        {
          "text": "Fortune favours the brave.",
          "author": "Virgil"
        },
        {
          "text": "I believe in one thing only, the power of human will.",
          "author": "Joseph Stalin"
        },
        {
          "text": "The best way out is always through.",
          "author": "Robert Frost"
        },
        {
          "text": "The mind unlearns with difficulty what it has long learned.",
          "author": "Seneca"
        },
        {
          "text": "I destroy my enemies when I make them my friends.",
          "author": "Abraham Lincoln"
        },
        {
          "text": "No garden is without its weeds.",
          "author": "Thomas Fuller"
        },
        {
          "text": "There is no failure except in no longer trying.",
          "author": "Elbert Hubbard"
        },
        {
          "text": "Kind words will unlock an iron door.",
          "author": "Turkish proverb"
        },
        {
          "text": "Problems are only opportunities with thorns on them.",
          "author": "Hugh Miller"
        },
        {
          "text": "Life is just a chance to grow a soul.",
          "author": "A. Powell Davies"
        },
        {
          "text": "Mountains cannot be surmounted except by winding paths.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "May our hearts garden of awakening bloom with hundreds of flowers.",
          "author": "Thich Nhat Hanh"
        },
        {
          "text": "Fortune befriends the bold.",
          "author": "John Dryden"
        },
        {
          "text": "Keep true to the dreams of thy youth.",
          "author": "Friedrich von Schiller"
        },
        {
          "text": "You're never a loser until you quit trying.",
          "author": "Mike Ditka"
        },
        {
          "text": "Science is organized knowledge. Wisdom is organized life.",
          "author": "Immanuel Kant"
        },
        {
          "text": "Knowing is not enough; we must apply!",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Strong beliefs win strong men, and then make them stronger.",
          "author": "Richard Bach"
        },
        {
          "text": "Autumn is a second spring when every leaf is a flower.",
          "author": "Albert Camus"
        },
        {
          "text": "If you surrender to the wind, you can ride it.",
          "author": "Toni Morrison"
        },
        {
          "text": "Keep yourself to the sunshine and you cannot see the shadow.",
          "author": "Helen Keller"
        },
        {
          "text": "Write your plans in pencil and give God the eraser.",
          "author": "Paulo Coelho"
        },
        {
          "text": "Inspiration exists, but it has to find us working.",
          "author": "Pablo Picasso"
        },
        {
          "text": "Pick battles big enough to matter, small enough to win.",
          "author": "Jonathan Kozol"
        },
        {
          "text": "Don't compromise yourself. You are all you've got.",
          "author": "Janis Joplin"
        },
        {
          "text": "A short saying oft contains much wisdom.",
          "author": "Sophocles"
        },
        {
          "text": "Difficulties are things that show a person what they are.",
          "author": "Epictetus"
        },
        {
          "text": "When you doubt your power, you give power to your doubt.",
          "author": "Honore de Balzac"
        },
        {
          "text": "The cause is hidden. The effect is visible to all.",
          "author": "Ovid"
        },
        {
          "text": "A prudent question is one half of wisdom.",
          "author": "Francis Bacon"
        },
        {
          "text": "The path to success is to take massive, determined action.",
          "author": "Tony Robbins"
        },
        {
          "text": "I allow my intuition to lead my path.",
          "author": "Manuel Puig"
        },
        {
          "text": "Nature takes away any faculty that is not used.",
          "author": "William R. Inge"
        },
        {
          "text": "If you wish to be a writer, write.",
          "author": "Epictetus"
        },
        {
          "text": "There is no way to prosperity, prosperity is the way.",
          "author": "Wayne Dyer"
        },
        {
          "text": "Either you run the day or the day runs you.",
          "author": "Jim Rohn"
        },
        {
          "text": "Better be ignorant of a matter than half know it.",
          "author": "Publilius Syrus"
        },
        {
          "text": "Follow your instincts. That is where true wisdom manifests itself.",
          "author": "Oprah Winfrey"
        },
        {
          "text": "There never was a good knife made of bad steel.",
          "author": "Benjamin Franklin"
        },
        {
          "text": "To accomplish great things, we must dream as well as act.",
          "author": "Anatole France"
        },
        {
          "text": "Patience is the companion of wisdom.",
          "author": "Saint Augustine"
        },
        {
          "text": "The mind is everything. What you think you become.",
          "author": "Buddha"
        },
        {
          "text": "To enjoy life, we must touch much of it lightly.",
          "author": "Voltaire"
        },
        {
          "text": "To fly, we have to have resistance.",
          "author": "Maya Lin"
        },
        {
          "text": "What you see depends on what you're looking for.",
          "author": null
        },
        {
          "text": "The heart has its reasons which reason knows not of.",
          "author": "Blaise Pascal"
        },
        {
          "text": "Be great in act, as you have been in thought.",
          "author": "William Shakespeare"
        },
        {
          "text": "Imagination rules the world.",
          "author": "Napoleon Bonaparte"
        },
        {
          "text": "Kind words do not cost much. Yet they accomplish much.",
          "author": "Blaise Pascal"
        },
        {
          "text": "There is no greater harm than that of time wasted.",
          "author": "Michelangelo"
        },
        {
          "text": "Intuition will tell the thinking mind where to look next.",
          "author": "Jonas Salk"
        },
        {
          "text": "Worry gives a small thing a big shadow.",
          "author": null
        },
        {
          "text": "Fears are nothing more than a state of mind.",
          "author": "Napoleon Hill"
        },
        {
          "text": "The journey of a thousand miles begins with one step.",
          "author": "Lao Tzu"
        },
        {
          "text": "Efficiency is doing things right; effectiveness is doing the right things.",
          "author": "Peter Drucker"
        },
        {
          "text": "Blaze with the fire that is never extinguished.",
          "author": "Luisa Sigea"
        },
        {
          "text": "Don't cry because it's over. Smile because it happened.",
          "author": "Dr. Seuss"
        },
        {
          "text": "No is easier to do. Yes is easier to say.",
          "author": "Jason Fried"
        },
        {
          "text": "To be wrong is nothing unless you continue to remember it.",
          "author": "Confucius"
        },
        {
          "text": "Yesterdays home runs don't win today's games.",
          "author": "Babe Ruth"
        },
        {
          "text": "Silence is deep as Eternity, Speech is shallow as Time.",
          "author": "Carlyle"
        },
        {
          "text": "Don't smother each other. No one can grow in the shade.",
          "author": "Leo F. Buscaglia"
        },
        {
          "text": "An ant on the move does more than a dozing ox",
          "author": "Lao Tzu"
        },
        {
          "text": "You can't shake hands with a clenched fist.",
          "author": "Indira Gandhi"
        },
        {
          "text": "A good decision is based on knowledge and not on numbers.",
          "author": "Plato"
        },
        {
          "text": "The cautious seldom err.",
          "author": "Confucius"
        },
        {
          "text": "If there is no struggle, there is no progress.",
          "author": "Frederick Douglass"
        },
        {
          "text": "Where there is great love, there are always miracles.",
          "author": "Willa Cather"
        },
        {
          "text": "Time you enjoy wasting, was not wasted.",
          "author": "John Lennon"
        },
        {
          "text": "Every problem has a gift for you in its hands.",
          "author": "Richard Bach"
        },
        {
          "text": "Sadness flies away on the wings of time.",
          "author": "Jean de la Fontaine"
        },
        {
          "text": "I have often regretted my speech, never my silence.",
          "author": "Publilius Syrus"
        },
        {
          "text": "Never put off till tomorrow what you can do today.",
          "author": "Thomas Jefferson"
        },
        {
          "text": "Minds are like parachutes. They only function when open.",
          "author": "Thomas Dewar"
        },
        {
          "text": "If a man does his best, what else is there?",
          "author": "George Patton"
        },
        {
          "text": "The secret of success is constancy to purpose.",
          "author": "Benjamin Disraeli"
        },
        {
          "text": "Life is a progress, and not a station.",
          "author": "Ralph Emerson"
        },
        {
          "text": "All seasons are beautiful for the person who carries happiness within.",
          "author": "Horace Friess"
        },
        {
          "text": "To avoid criticism, do nothing, say nothing, be nothing.",
          "author": "Elbert Hubbard"
        },
        {
          "text": "All things change; nothing perishes.",
          "author": "Ovid"
        },
        {
          "text": "Absence makes the heart grow fonder.",
          "author": "Haynes Bayly"
        },
        {
          "text": "Imagination is the highest kite one can fly.",
          "author": "Lauren Bacall"
        },
        {
          "text": "The beginning of knowledge is the discovery of something we do not understand.",
          "author": "Frank Herbert"
        },
        {
          "text": "Love doesn't make the world go round, love is what makes the ride worthwhile.",
          "author": "Elizabeth Browning"
        },
        {
          "text": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
          "author": "Arthur Conan Doyle"
        },
        {
          "text": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
          "author": "J. Willard Marriott"
        },
        {
          "text": "I believe that we are fundamentally the same and have the same basic potential.",
          "author": "Dalai Lama"
        },
        {
          "text": "The winds and waves are always on the side of the ablest navigators.",
          "author": "Edward Gibbon"
        },
        {
          "text": "The future belongs to those who believe in the beauty of their dreams.",
          "author": "Eleanor Roosevelt"
        },
        {
          "text": "To get something you never had, you have to do something you never did.",
          "author": null
        },
        {
          "text": "Be thankful when you don't know something for it gives you the opportunity to learn.",
          "author": null
        },
        {
          "text": "Strength does not come from physical capacity. It comes from an indomitable will.",
          "author": "Mahatma Gandhi"
        },
        {
          "text": "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
          "author": "Og Mandino"
        },
        {
          "text": "To forgive is to set a prisoner free and realize that prisoner was you.",
          "author": "Lewis B. Smedes"
        },
        {
          "text": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
          "author": "Buddha"
        },
        {
          "text": "By believing passionately in something that does not yet exist, we create it.",
          "author": "Nikos Kazantzakis"
        },
        {
          "text": "Letting go is not the end of the world; it is the beginning of a new life.",
          "author": null
        },
        {
          "text": "All the great performers I have worked with are fuelled by a personal dream.",
          "author": "John Eliot"
        },
        {
          "text": "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
          "author": "A. A. Milne"
        },
        {
          "text": "I never see what has been done; I only see what remains to be done.",
          "author": "Marie Curie"
        },
        {
          "text": "Begin at once to live and count each separate day as a separate life.",
          "author": "Seneca"
        },
        {
          "text": "If you don't know where you are going, you will probably end up somewhere else.",
          "author": "Lawrence Peter"
        },
        {
          "text": "It is not so important to know everything as to appreciate what we learn.",
          "author": "Hannah More"
        },
        {
          "text": "The bird of paradise alights only upon the hand that does not grasp.",
          "author": "John Berry"
        },
        {
          "text": "Think as a wise man but communicate in the language of the people.",
          "author": "William Yeats"
        },
        {
          "text": "Practice yourself, for heavens sake in little things, and then proceed to greater.",
          "author": "Epictetus"
        },
        {
          "text": "If one does not know to which port is sailing, no wind is favorable.",
          "author": "Seneca"
        },
        {
          "text": "Our greatest glory is not in never failing but rising everytime we fall.",
          "author": null
        },
        {
          "text": "Being right is highly overrated. Even a stopped clock is right twice a day.",
          "author": null
        },
        {
          "text": "To be upset over what you don't have is to waste what you do have.",
          "author": "Ken S. Keyes"
        },
        {
          "text": "If we did the things we are capable of, we would astound ourselves.",
          "author": "Thomas Edison"
        },
        {
          "text": "Nothing in life is to be feared. It is only to be understood.",
          "author": "Marie Curie"
        },
        {
          "text": "Successful people ask better questions, and as a result, they get better answers.",
          "author": "Tony Robbins"
        },
        {
          "text": "Love is not blind; it simply enables one to see things others fail to see.",
          "author": null
        },
        {
          "text": "Life is a process. We are a process. The universe is a process.",
          "author": "Anne Schaef"
        },
        {
          "text": "I think somehow we learn who we really are and then live with that decision.",
          "author": "Eleanor Roosevelt"
        },
        {
          "text": "We learn what we have said from those who listen to our speaking.",
          "author": "Kenneth Patton"
        },
        {
          "text": "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
          "author": "Kahlil Gibran"
        },
        {
          "text": "If you get up one more time than you fall, you will make it through.",
          "author": null
        },
        {
          "text": "The doors we open and close each day decide the lives we live.",
          "author": "Flora Whittemore"
        },
        {
          "text": "The worst bankrupt in the world is the person who has lost his enthusiasm.",
          "author": "H. W. Arnold"
        },
        {
          "text": "Happiness comes when your work and words are of benefit to yourself and others.",
          "author": "Buddha"
        },
        {
          "text": "Don't focus on making the right decision, focus on making the decision the right one.",
          "author": null
        },
        {
          "text": "Everything is perfect in the universe even your desire to improve it.",
          "author": "Wayne Dyer"
        },
        {
          "text": "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
          "author": "Eden Phillpotts"
        },
        {
          "text": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
          "author": "Buddha"
        },
        {
          "text": "A thing long expected takes the form of the unexpected when at last it comes.",
          "author": "Mark Twain"
        },
        {
          "text": "Action may not always bring happiness; but there is no happiness without action.",
          "author": "Benjamin Disraeli"
        },
        {
          "text": "I don't believe in failure. It is not failure if you enjoyed the process.",
          "author": "Oprah Winfrey"
        },
        {
          "text": "What you do not want done to yourself, do not do to others.",
          "author": "Confucius"
        },
        {
          "text": "Short words are best and the old words when short are best of all.",
          "author": "Winston Churchill"
        },
        {
          "text": "If you light a lamp for somebody, it will also brighten your path.",
          "author": "Buddha"
        },
        {
          "text": "I have done my best: that is about all the philosophy of living one needs.",
          "author": "Lin-yutang"
        },
        {
          "text": "Through perseverance many people win success out of what seemed destined to be certain failure.",
          "author": "Benjamin Disraeli"
        },
        {
          "text": "Give thanks for the rain of life that propels us to reach new horizons.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Love is just a word until someone comes along and gives it meaning.",
          "author": null
        },
        {
          "text": "We all have problems. The way we solve them is what makes us different.",
          "author": null
        },
        {
          "text": "The secret to a rich life is to have more beginnings than endings.",
          "author": "Dave Weinbaum"
        },
        {
          "text": "It is only when the mind and character slumber that the dress can be seen.",
          "author": "Ralph Waldo Emerson"
        },
        {
          "text": "If you don't like something, change it. If you can't change it, change your attitude.",
          "author": "Maya Angelou"
        },
        {
          "text": "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
          "author": "Confucius"
        },
        {
          "text": "The world is a book, and those who do not travel read only a page.",
          "author": "Augustinus Sanctus"
        },
        {
          "text": "So long as a person is capable of self-renewal they are a living being.",
          "author": "Henri-Frederic Amiel"
        },
        {
          "text": "I'm not afraid of storms, for I'm learning how to sail my ship.",
          "author": "Louisa Alcott"
        },
        {
          "text": "Think for yourselves and let others enjoy the privilege to do so too.",
          "author": "Voltaire"
        },
        {
          "text": "How we spend our days is, of course, how we spend our lives.",
          "author": "Annie Dillard"
        },
        {
          "text": "It has never been my object to record my dreams, just to realize them.",
          "author": "Man Ray"
        },
        {
          "text": "The most complicated achievements of thought are possible without the assistance of consciousness.",
          "author": "Sigmund Freud"
        },
        {
          "text": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
          "author": "Wayne Dyer"
        },
        {
          "text": "Most great people have attained their greatest success just one step beyond their greatest failure.",
          "author": "Napoleon Hill"
        },
        {
          "text": "If you think you can, you can. And if you think you can't, you're right.",
          "author": "Henry Ford"
        },
        {
          "text": "Better to have loved and lost, than to have never loved at all.",
          "author": "St. Augustine"
        },
        {
          "text": "Everyone thinks of changing the world, but no one thinks of changing himself.",
          "author": "Leo Tolstoy"
        },
        {
          "text": "The best way to pay for a lovely moment is to enjoy it.",
          "author": "Richard Bach"
        },
        {
          "text": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
          "author": "Winston Churchill"
        },
        {
          "text": "Slow down and everything you are chasing will come around and catch you.",
          "author": "John De Paola"
        },
        {
          "text": "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
          "author": "Buddha"
        },
        {
          "text": "I always wanted to be somebody, but I should have been more specific.",
          "author": "Lily Tomlin"
        },
        {
          "text": "Yeah we all shine on, like the moon, and the stars, and the sun.",
          "author": "John Lennon"
        },
        {
          "text": "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
          "author": "Martin Fischer"
        },
        {
          "text": "Life is like riding a bicycle. To keep your balance you must keep moving.",
          "author": "Albert Einstein"
        },
        {
          "text": "We should all be thankful for those people who rekindle the inner spirit.",
          "author": "Albert Schweitzer"
        },
        {
          "text": "Opportunity is missed by most because it is dressed in overalls and looks like work.",
          "author": "Thomas Edison"
        },
        {
          "text": "Feeling and longing are the motive forces behind all human endeavor and human creations.",
          "author": "Albert Einstein"
        },
        {
          "text": "In the end we retain from our studies only that which we practically apply.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "If you correct your mind, the rest of your life will fall into place.",
          "author": "Lao Tzu"
        },
        {
          "text": "The world makes way for the man who knows where he is going.",
          "author": "Ralph Emerson"
        },
        {
          "text": "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
          "author": "Napoleon Hill"
        },
        {
          "text": "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
          "author": "John Adams"
        },
        {
          "text": "I cannot make my days longer so I strive to make them better.",
          "author": "Henry David Thoreau"
        },
        {
          "text": "Tension is who you think you should be. Relaxation is who you are.",
          "author": "Chinese proverb"
        },
        {
          "text": "Never bend your head. Always hold it high. Look the world right in the eye.",
          "author": "Helen Keller"
        },
        {
          "text": "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
          "author": "Albert Schweitzer"
        },
        {
          "text": "We cannot do everything at once, but we can do something at once.",
          "author": "Calvin Coolidge"
        },
        {
          "text": "You have to do your own growing no matter how tall your grandfather was.",
          "author": "Abraham Lincoln"
        },
        {
          "text": "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
          "author": null
        },
        {
          "text": "It is fatal to enter any war without the will to win it.",
          "author": "General Douglas MacArthur"
        },
        {
          "text": "Be what you are. This is the first step toward becoming better than you are.",
          "author": "Julius Charles Hare"
        },
        {
          "text": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
          "author": "Buckminster Fuller"
        },
        {
          "text": "Love and compassion open our own inner life, reducing stress, distrust and loneliness.",
          "author": "Dalai Lama"
        },
        {
          "text": "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
          "author": "Walter Lippmann"
        },
        {
          "text": "The superior man is satisfied and composed; the mean man is always full of distress.",
          "author": "Confucius"
        },
        {
          "text": "If you spend too much time thinking about a thing, you'll never get it done.",
          "author": "Bruce Lee"
        },
        {
          "text": "The way is not in the sky. The way is in the heart.",
          "author": "Buddha"
        },
        {
          "text": "Most people are about as happy as they make up their minds to be",
          "author": "Abraham Lincoln"
        },
        {
          "text": "Three things cannot be long hidden: the sun, the moon, and the truth.",
          "author": "Buddha"
        },
        {
          "text": "More often than not, anger is actually an indication of weakness rather than of strength.",
          "author": "Dalai Lama"
        },
        {
          "text": "Before you put on a frown, make absolutely sure there are no smiles available.",
          "author": "Jim Beggs"
        },
        {
          "text": "A man of ability and the desire to accomplish something can do anything.",
          "author": "Donald Kircher"
        },
        {
          "text": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
          "author": "Buddha"
        },
        {
          "text": "It is not uncommon for people to spend their whole life waiting to start living.",
          "author": "Eckhart Tolle"
        },
        {
          "text": "Don't be afraid to go out on a limb. That's where the fruit is.",
          "author": "H. Jackson Browne"
        },
        {
          "text": "Wicked people are always surprised to find ability in those that are good.",
          "author": "Marquis Vauvenargues"
        },
        {
          "text": "Life is so constructed that an event does not, cannot, will not, match the expectation.",
          "author": "Charlotte Bronte"
        },
        {
          "text": "If you change the way you look at things, the things you look at change.",
          "author": "Wayne Dyer"
        },
        {
          "text": "No man can succeed in a line of endeavor which he does not like.",
          "author": "Napoleon Hill"
        },
        {
          "text": "You will not be punished for your anger, you will be punished by your anger.",
          "author": "Buddha"
        },
        {
          "text": "Don't judge each day by the harvest you reap but by the seeds you plant.",
          "author": "Robert Stevenson"
        },
        {
          "text": "They say that time changes things, but you actually have to change them yourself.",
          "author": "Andy Warhol"
        },
        {
          "text": "Never apologize for showing feelings. When you do so, you apologize for the truth.",
          "author": "Benjamin Disraeli"
        },
        {
          "text": "The truth you believe and cling to makes you unavailable to hear anything new.",
          "author": "Pema Chodron"
        },
        {
          "text": "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
          "author": "Horace"
        },
        {
          "text": "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
          "author": "Morris West"
        },
        {
          "text": "The only limit to our realization of tomorrow will be our doubts of today.",
          "author": "Franklin Roosevelt"
        },
        {
          "text": "Every action of our lives touches on some chord that will vibrate in eternity.",
          "author": "Edwin Chapin"
        },
        {
          "text": "Shoot for the moon. Even if you miss, you'll land among the stars.",
          "author": "Les Brown"
        },
        {
          "text": "It does not matter how slowly you go as long as you do not stop.",
          "author": "Confucius"
        },
        {
          "text": "Every day may not be good, but there's something good in every day.",
          "author": null
        },
        {
          "text": "Most folks are about as happy as they make up their minds to be.",
          "author": "Abraham Lincoln"
        },
        {
          "text": "If you would take, you must first give, this is the beginning of intelligence.",
          "author": "Lao Tzu"
        },
        {
          "text": "Some people think it's holding that makes one strong sometimes it's letting go.",
          "author": null
        },
        {
          "text": "It is on our failures that we base a new and different and better success.",
          "author": "Havelock Ellis"
        },
        {
          "text": "Quality is never an accident; it is always the result of intelligent effort.",
          "author": "John Ruskin"
        },
        {
          "text": "To study and not think is a waste. To think and not study is dangerous.",
          "author": "Confucius"
        },
        {
          "text": "Life is a succession of lessons, which must be lived to be understood.",
          "author": "Ralph Emerson"
        },
        {
          "text": "Time changes everything except something within us which is always surprised by change.",
          "author": "Thomas Hardy"
        },
        {
          "text": "You are important enough to ask and you are blessed enough to receive back.",
          "author": "Wayne Dyer"
        },
        {
          "text": "If you cannot do great things, do small things in a great way.",
          "author": "Napoleon Hill"
        },
        {
          "text": "If you want your life to be more rewarding, you have to change the way you think.",
          "author": "Oprah Winfrey"
        },
        {
          "text": "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
          "author": "Leonardo Ruiz"
        },
        {
          "text": "The free man is he who does not fear to go to the end of his thought.",
          "author": "Leon Blum"
        },
        {
          "text": "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
          "author": "Ralph Emerson"
        },
        {
          "text": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
          "author": "Bernard Shaw"
        },
        {
          "text": "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
          "author": "Lao Tzu"
        },
        {
          "text": "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
          "author": "Charles Dickens"
        },
        {
          "text": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
          "author": "Dalai Lama"
        },
        {
          "text": "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
          "author": "Sam Keen"
        },
        {
          "text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
          "author": "Walt Emerson"
        },
        {
          "text": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
          "author": "John Astin"
        },
        {
          "text": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
          "author": "Elbert Hubbard"
        },
        {
          "text": "There is no retirement for an artist, it's your way of living so there is no end to it.",
          "author": "Henry Moore"
        },
        {
          "text": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
          "author": "Confucius"
        },
        {
          "text": "Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?",
          "author": null
        },
        {
          "text": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
          "author": "Laozi"
        },
        {
          "text": "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
          "author": "William Shakespeare"
        },
        {
          "text": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
          "author": "George Sheehan"
        },
        {
          "text": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
          "author": "Thomas Jefferson"
        },
        {
          "text": "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
          "author": "Antoine de Saint-Exupery"
        },
        {
          "text": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
          "author": "Marcel Proust"
        },
        {
          "text": "Make the best use of what is in your power, and take the rest as it happens.",
          "author": "Epictetus"
        },
        {
          "text": "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
          "author": "Louise Hay"
        },
        {
          "text": "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
          "author": "W. Clement Stone"
        },
        {
          "text": "The reason most goals are not achieved is that we spend our time doing second things first.",
          "author": "Robert McKain"
        },
        {
          "text": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
          "author": "John Quincy Adams"
        },
        {
          "text": "I'm a great believer in luck and I find the harder I work, the more I have of it.",
          "author": "Thomas Jefferson"
        },
        {
          "text": "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
          "author": "Ralph Emerson"
        },
        {
          "text": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
          "author": "William Saroyan"
        },
        {
          "text": "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
          "author": "Leonardo da Vinci"
        },
        {
          "text": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
          "author": "Isaac Asimov"
        },
        {
          "text": "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
          "author": "Henry Van Dyke"
        },
        {
          "text": "You got to be careful if you don't know where you're going, because you might not get there.",
          "author": "Yogi Berra"
        },
        {
          "text": "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
          "author": "Naguib Mahfouz"
        },
        {
          "text": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
          "author": "Anthony Robbins"
        },
        {
          "text": "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
          "author": "John Wooden"
        },
        {
          "text": "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
          "author": "Og Mandino"
        },
        {
          "text": "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
          "author": "Jane Addams"
        },
        {
          "text": "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
          "author": "Thomas Carlyle"
        },
        {
          "text": "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
          "author": "M. Scott Peck"
        },
        {
          "text": "The minute you settle for less than you deserve, you get even less than you settled for.",
          "author": "Maureen Dowd"
        },
        {
          "text": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
          "author": "Charles Darwin"
        },
        {
          "text": "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
          "author": null
        },
        {
          "text": "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
          "author": "Dalai Lama"
        },
        {
          "text": "There is only one success to be able to spend your life in your own way.",
          "author": "Christopher Morley"
        },
        {
          "text": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
          "author": "Hannah Arendt"
        },
        {
          "text": "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
          "author": "Alan Cohen"
        },
        {
          "text": "There is only one corner of the universe you can be certain of improving, and that's your own self.",
          "author": "Aldous Huxley"
        },
        {
          "text": "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
          "author": "Marian Edelman"
        },
        {
          "text": "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
          "author": "Sue Patton Thoele"
        },
        {
          "text": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
          "author": "Frank Crane"
        },
        {
          "text": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
          "author": "Lao Tzu"
        },
        {
          "text": "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
          "author": "Kathleen Norris"
        },
        {
          "text": "Choose a job you love, and you will never have to work a day in your life.",
          "author": "Confucius"
        },
        {
          "text": "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
          "author": "Eckhart Tolle"
        },
        {
          "text": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
          "author": "Anne Bronte"
        },
        {
          "text": "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
          "author": "Richard Bach"
        },
        {
          "text": "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
          "author": "Desiderius Erasmus"
        },
        {
          "text": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
          "author": "Arthur Rubinstein"
        },
        {
          "text": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
          "author": "Louis Pasteur"
        },
        {
          "text": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
          "author": "Rumi"
        },
        {
          "text": "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
          "author": "Sogyal Rinpoche"
        },
        {
          "text": "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
          "author": "Dennis Kimbro"
        },
        {
          "text": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
          "author": "William Penn"
        },
        {
          "text": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
          "author": "Immanuel Kant"
        },
        {
          "text": "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
          "author": "Buddha"
        },
        {
          "text": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
          "author": null
        },
        {
          "text": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
          "author": "Robert Lynd"
        },
        {
          "text": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
          "author": "Ralph Emerson"
        },
        {
          "text": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
          "author": "Donald Trump"
        },
        {
          "text": "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
          "author": "Eleanor Roosevelt"
        },
        {
          "text": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
          "author": "Robert Fulghum"
        },
        {
          "text": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
          "author": "Bruce Lee"
        },
        {
          "text": "Every man takes the limits of his own field of vision for the limits of the world.",
          "author": "Arthur Schopenhauer"
        },
        {
          "text": "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
          "author": "Andre Gide"
        },
        {
          "text": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
          "author": "Sai Baba"
        },
        {
          "text": "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?",
          "author": "Dalai Lama"
        },
        {
          "text": "Life is like a sewer. What you get out of it depends on what you put into it.",
          "author": "Tom Lehrer"
        },
        {
          "text": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
          "author": "Bruce Lee"
        },
        {
          "text": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
          "author": "Alfred Sheinwold"
        },
        {
          "text": "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
          "author": "Sri Chinmoy"
        },
        {
          "text": "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
          "author": "James Freeman Clarke"
        },
        {
          "text": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
          "author": "Anais Nin"
        },
        {
          "text": "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
          "author": "Marcus Aurelius"
        },
        {
          "text": "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
          "author": "Wayne Dyer"
        },
        {
          "text": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
          "author": "Buddha"
        },
        {
          "text": "It is the greatest of all mistakes to do nothing because you can only do little do what you can.",
          "author": "Sydney Smith"
        },
        {
          "text": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
          "author": "Confucius"
        },
        {
          "text": "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
          "author": "Mary Kay Ash"
        },
        {
          "text": "Those who try to do something and fail are infinitely better than those who try nothing and succeed.",
          "author": "Lloyd Jones"
        },
        {
          "text": "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
          "author": "Vista Kelly"
        },
        {
          "text": "The first step to getting the things you want out of life is this: decide what you want.",
          "author": "Ben Stein"
        },
        {
          "text": "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
          "author": null
        },
        {
          "text": "Experience is not what happens to a man. It is what a man does with what happens to him.",
          "author": "Aldous Huxley"
        },
        {
          "text": "A good teacher is like a candle it consumes itself to light the way for others.",
          "author": null
        },
        {
          "text": "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
          "author": "Oscar Wilde"
        },
        {
          "text": "Life is not measured by the breaths we take, but by the moments that take our breath.",
          "author": null
        },
        {
          "text": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
          "author": "Honore de Balzac"
        },
        {
          "text": "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
          "author": "Jacob Braude"
        },
        {
          "text": "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
          "author": "Vince Lombardi"
        },
        {
          "text": "What lies behind us and what lies before us are small matters compared to what lies within us.",
          "author": "Oliver Holmes"
        },
        {
          "text": "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
          "author": "Dalai Lama"
        },
        {
          "text": "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
          "author": "Nelson Mandela"
        },
        {
          "text": "Forget about all the reasons why something may not work. You only need to find one good reason why it will.",
          "author": "Robert Anthony"
        },
        {
          "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
          "author": "Aristotle"
        },
        {
          "text": "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
          "author": "Washington Irving"
        },
        {
          "text": "We all live with the objective of being happy; our lives are all different and yet the same.",
          "author": "Anne Frank"
        },
        {
          "text": "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.",
          "author": "Thich Nhat Hanh"
        },
        {
          "text": "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
          "author": "Buddha"
        },
        {
          "text": "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
          "author": "Jessamyn West"
        },
        {
          "text": "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
          "author": "Plato"
        },
        {
          "text": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
          "author": "Bruce Lee"
        },
        {
          "text": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
          "author": "Charlotte Gilman"
        },
        {
          "text": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
          "author": "Mother Teresa"
        },
        {
          "text": "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
          "author": "Margaret Runbeck"
        },
        {
          "text": "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
          "author": "Dalai Lama"
        },
        {
          "text": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
          "author": "Ovid"
        },
        {
          "text": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
          "author": "Og Mandino"
        },
        {
          "text": "We never understand how little we need in this world until we know the loss of it.",
          "author": "James Barrie"
        },
        {
          "text": "The real measure of your wealth is how much youd be worth if you lost all your money.",
          "author": null
        },
        {
          "text": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
          "author": "Buddha"
        },
        {
          "text": "Take no thought of who is right or wrong or who is better than. Be not for or against.",
          "author": "Bruce Lee"
        },
        {
          "text": "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
          "author": "Everett Dirksen"
        },
        {
          "text": "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
          "author": "Henry Miller"
        },
        {
          "text": "At the center of your being you have the answer; you know who you are and you know what you want.",
          "author": "Lao Tzu"
        },
        {
          "text": "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
          "author": "Niels Bohr"
        },
        {
          "text": "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
          "author": "Georg Lichtenberg"
        },
        {
          "text": "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.",
          "author": "Anais Nin"
        },
        {
          "text": "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
          "author": "Gloria Steinem"
        },
        {
          "text": "Sadness may be part of life but there is no need to let it dominate your entire life.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
          "author": "Charles Schwab"
        },
        {
          "text": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
          "author": "Epictetus"
        },
        {
          "text": "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
          "author": "Barbara Baron"
        },
        {
          "text": "You are always free to change your mind and choose a different future, or a different past.",
          "author": "Richard Bach"
        },
        {
          "text": "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
          "author": "Lou Holtz"
        },
        {
          "text": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
          "author": "Napoleon Hill"
        },
        {
          "text": "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
          "author": "Napoleon Hill"
        },
        {
          "text": "To be what we are, and to become what we are capable of becoming, is the only end of life.",
          "author": "Robert Stevenson"
        },
        {
          "text": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
          "author": "Charles DeLint"
        },
        {
          "text": "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
          "author": "Bruce Lee"
        },
        {
          "text": "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
          "author": "Albert Einstein"
        }
]