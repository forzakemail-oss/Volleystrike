const teams = [
  {
    name: 'Jamaica College',
    gender: 'boys',
    colors: ['#08c16f', '#f7d948'],
    style: 'champion',
    slogan: 'Aerial power meets precision strike.',
    rating: 98,
    roster: [
      { name: 'Zak Matthews', age: 25, height: "5'10\"", origin: 'Saint Andrew, Jamaica', bio: 'Jersey 5 from Jamaica, grew up in Saint Andrew, and is the explosive heart of Jamaica College’s offense.' },
      { name: 'Kimo “Sky” Clarke', age: 24, height: "6'2\"", origin: 'Kingston, Jamaica', bio: 'Known for sky-high smashes and fast transition reads at the net.' },
      { name: 'Nia Brown', age: 23, height: "5'9\"", origin: 'Portmore, Jamaica', bio: 'A versatile attacker who brings energy and playmaking in every set.' },
      { name: 'Marlon Reid', age: 26, height: "6'4\"", origin: 'Montego Bay, Jamaica', bio: 'A powerful blocker with a commanding presence across the net.' },
      { name: 'Trey Ellis', age: 22, height: "6'0\"", origin: 'Spanish Town, Jamaica', bio: 'Tactical server with sharp angles that break through defenses.' },
      { name: 'Serena Powell', age: 21, height: "5'7\"", origin: 'Ocho Rios, Jamaica', bio: 'A quick shuttler who turns every dig into offense for her club.' },
    ],
  },
  {
    name: 'Neon Raptors',
    gender: 'boys',
    colors: ['#81f4ff', '#1a2d5c'],
    slogan: 'Speed, spin, and a neon slide.',
    rating: 88,
    roster: [
      { name: 'Mika Torres', age: 22, height: "6'1\"", origin: 'Miami, USA', bio: 'A rapid attacker with blinding speed in the backcourt.' },
      { name: 'Cruz Vega', age: 23, height: "5'11\"", origin: 'San Juan, Puerto Rico', bio: 'A crafty setter who sets tempo and keeps opponents guessing.' },
      { name: 'Jade Park', age: 21, height: "5'10\"", origin: 'Los Angeles, USA', bio: 'Known for sleek slides and a flawless mid-air finish.' },
      { name: 'Ari Castillo', age: 24, height: "6'0\"", origin: 'Houston, USA', bio: 'A fearless closer with big-point confidence.' },
      { name: 'Xander Finch', age: 25, height: "6'2\"", origin: 'Seattle, USA', bio: 'A high-precision blocker with great court awareness.' },
      { name: 'Violet Hart', age: 22, height: "5'8\"", origin: 'Chicago, USA', bio: 'A defensive specialist whose reads turn rallies around.' },
    ],
  },
  {
    name: 'Luna Strikers',
    gender: 'boys',
    colors: ['#c4b8ff', '#11224f'],
    slogan: 'Moonlit volleys and sonic runs.',
    rating: 84,
    roster: [
      { name: 'Lena Vu', age: 23, height: "5'11\"", origin: 'Toronto, Canada', bio: 'A smooth operator who mixes power with clever placement.' },
      { name: 'Rico Salas', age: 22, height: "6'1\"", origin: 'Monterrey, Mexico', bio: 'An agile finisher who excels in late-match pressure.' },
      { name: 'Talia Moon', age: 21, height: "5'9\"", origin: 'San Diego, USA', bio: 'Quick on her feet, with a creative flair at the net.' },
      { name: 'Dante Stone', age: 24, height: "6'0\"", origin: 'Phoenix, USA', bio: 'A solid anchor in transition who digs under tough serves.' },
      { name: 'Maya Rivers', age: 22, height: "5'10\"", origin: 'Calgary, Canada', bio: 'A relentless attacker with excellent timing and burst.' },
      { name: 'Jett Rhodes', age: 23, height: "6'3\"", origin: 'Denver, USA', bio: 'A strong presence at the net who dominates with power blocks.' },
    ],
  },
  {
    name: 'Silver Cobras',
    gender: 'boys',
    colors: ['#d6dde5', '#444444'],
    slogan: 'Slithering attacks with icy defense.',
    rating: 82,
    roster: [
      { name: 'Noah Kane', age: 24, height: "6'2\"", origin: 'London, UK', bio: 'A tactical attacker who hits sharp off-speed strikes.' },
      { name: 'Asha Malik', age: 21, height: "5'10\"", origin: 'Birmingham, UK', bio: 'A creative setter with the ability to turn defense into lightning offense.' },
      { name: 'Beck Ryder', age: 23, height: "6'1\"", origin: 'Bristol, UK', bio: 'A powerful middle with explosive finish at the net.' },
      { name: 'Sienna Cole', age: 22, height: "5'11\"", origin: 'Manchester, UK', bio: 'A quick defender who stays calm under heavy serves.' },
      { name: 'Marcus Holt', age: 25, height: "6'3\"", origin: 'Liverpool, UK', bio: 'A dominant blocker known for shutting down drives.' },
      { name: 'Elise Penn', age: 20, height: "5'9\"", origin: 'Leeds, UK', bio: 'A clever attacker with consistent finish from anywhere on court.' },
    ],
  },
  {
    name: 'Titan Rush',
    gender: 'boys',
    colors: ['#f2584b', '#1c1f4c'],
    slogan: 'Relentless charge with aerial dominance.',
    rating: 86,
    roster: [
      { name: 'Leo Banks', age: 24, height: "6'4\"", origin: 'Cape Town, South Africa', bio: 'A towering attacker who brings pure power to the court.' },
      { name: 'Zara Quinn', age: 22, height: "5'11\"", origin: 'Durban, South Africa', bio: 'A smart playmaker with quick ball distribution.' },
      { name: 'Hugo King', age: 23, height: "6'3\"", origin: 'Johannesburg, South Africa', bio: 'A relentless blocker with superb timing.' },
      { name: 'Raya Cruz', age: 21, height: "5'10\"", origin: 'Buenos Aires, Argentina', bio: 'A crafty attacker who uses angles to break through defense.' },
      { name: 'Dex Morgan', age: 25, height: "6'0\"", origin: 'Los Angeles, USA', bio: 'A fierce server who opens games with dynamic pressure.' },
      { name: 'Lana Frost', age: 22, height: "5'9\"", origin: 'Denver, USA', bio: 'A versatile defender who keeps rallies alive with strong coverage.' },
    ],
  },
  {
    name: 'Harbor Hawks',
    gender: 'boys',
    colors: ['#6ce3ff', '#123f5e'],
    slogan: 'Seaside precision and high-flying blocks.',
    rating: 80,
    roster: [
      { name: 'Finn Brooks', age: 23, height: "6'1\"", origin: 'Sydney, Australia', bio: 'A balanced attacker who uses speed and precision.' },
      { name: 'Sofia Lane', age: 22, height: "5'11\"", origin: 'Melbourne, Australia', bio: 'A dynamic playmaker with sharp court vision.' },
      { name: 'Arlo Nash', age: 24, height: "6'2\"", origin: 'Auckland, New Zealand', bio: 'A strong middle with quick hands and smart blocks.' },
      { name: 'Nina Cross', age: 21, height: "5'10\"", origin: 'Brisbane, Australia', bio: 'A precise server whose jump float serve is hard to handle.' },
      { name: 'Owen Vale', age: 25, height: "6'3\"", origin: 'Perth, Australia', bio: 'A high-energy finisher who makes big plays in decisive moments.' },
      { name: 'Mira Dean', age: 22, height: "5'9\"", origin: 'Adelaide, Australia', bio: 'A quick defender with excellent recovery speed.' },
    ],
  },
  {
    name: 'Solar Surge',
    gender: 'boys',
    colors: ['#ffd67a', '#b45110'],
    slogan: 'Blazing attacks with electric tempo.',
    rating: 85,
    roster: [
      { name: 'Cass Bennett', age: 24, height: "6'0\"", origin: 'Phoenix, USA', bio: 'A bright playmaker who dictates the pace with fast sets.' },
      { name: 'Tyson Reid', age: 23, height: "6'2\"", origin: 'Las Vegas, USA', bio: 'A powerful attacker who turns every ball over the net.' },
      { name: 'Lani Moore', age: 22, height: "5'11\"", origin: 'Salt Lake City, USA', bio: 'A smart defender who locks down the backcourt.' },
      { name: 'Keegan Tate', age: 25, height: "6'1\"", origin: 'San Diego, USA', bio: 'A high-flying finisher with massive vertical jump.' },
      { name: 'Juno Bell', age: 21, height: "5'10\"", origin: 'Los Angeles, USA', bio: 'A creative attacker with excellent shot selection.' },
      { name: 'Amara Grace', age: 22, height: "5'9\"", origin: 'San Francisco, USA', bio: 'A tireless digger who keeps her team in every rally.' },
    ],
  },
  {
    name: 'Iron Waves',
    gender: 'boys',
    colors: ['#7dc5ff', '#0b1826'],
    slogan: 'Steel discipline and tidal energy.',
    rating: 83,
    roster: [
      { name: 'Maddox Vale', age: 25, height: "6'3\"", origin: 'Seattle, USA', bio: 'A strong blocker with exceptional aerial control.' },
      { name: 'Noelle Hart', age: 23, height: "5'11\"", origin: 'Portland, USA', bio: 'A precise setter who finds gaps in the defense.' },
      { name: 'Jonas Pike', age: 22, height: "6'2\"", origin: 'San Jose, USA', bio: 'A disciplined attacker with a steady scoring touch.' },
      { name: 'Ayla Reed', age: 21, height: "5'9\"", origin: 'Vancouver, Canada', bio: 'A smart defender who covers the court with ease.' },
      { name: 'Sage Marlow', age: 24, height: "6'0\"", origin: 'Calgary, Canada', bio: 'A clutch performer in tough rallies with calm strength.' },
      { name: 'Derek Stone', age: 25, height: "6'4\"", origin: 'Edmonton, Canada', bio: 'A dominant net presence who finishes with power.' },
    ],
  },
  {
    name: 'Metro Meteors',
    gender: 'boys',
    colors: ['#fbe96d', '#412f6a'],
    slogan: 'Urban bursts and explosive volleys.',
    rating: 79,
    roster: [
      { name: 'Cassian Park', age: 23, height: "6'1\"", origin: 'New York, USA', bio: 'A fast attacker who thrives in late-game rallies.' },
      { name: 'Nova Lee', age: 22, height: "5'10\"", origin: 'Brooklyn, USA', bio: 'A creative floor leader with great sprint speed.' },
      { name: 'Reed Fox', age: 24, height: "6'2\"", origin: 'Chicago, USA', bio: 'A high-voltage hitter with sharp angle shots.' },
      { name: 'Jade Norton', age: 21, height: "5'11\"", origin: 'Boston, USA', bio: 'A smart passer and pressure defender with poise.' },
      { name: 'Kira Storm', age: 25, height: "5'9\"", origin: 'Philadelphia, USA', bio: 'A strong server who makes opponents scramble.' },
      { name: 'Miles Vega', age: 23, height: "6'0\"", origin: 'Washington, D.C., USA', bio: 'A reliable anchor who always makes the smart play.' },
    ],
  },
  {
    name: 'Crimson Flames',
    gender: 'boys',
    colors: ['#ff5f6d', '#320706'],
    slogan: 'Inferno serves and blazing block lines.',
    rating: 81,
    roster: [
      { name: 'Niko Blaze', age: 24, height: "6'1\"", origin: 'Rio de Janeiro, Brazil', bio: 'A fiery attacker who brings intense energy every play.' },
      { name: 'Tess Ashford', age: 21, height: "5'10\"", origin: 'São Paulo, Brazil', bio: 'A scheming setter with strong quick-play instincts.' },
      { name: 'Rylan Fox', age: 23, height: "6'0\"", origin: 'Belo Horizonte, Brazil', bio: 'A fearless finisher who attacks with great precision.' },
      { name: 'Zara Flame', age: 22, height: "5'11\"", origin: 'Brasília, Brazil', bio: 'A quick defender whose hustle never stops.' },
      { name: 'Quinn Ellis', age: 25, height: "6'2\"", origin: 'Curitiba, Brazil', bio: 'A powerful blocker and clean clearing specialist.' },
      { name: 'Paige North', age: 20, height: "5'9\"", origin: 'Recife, Brazil', bio: 'A smooth target hitter with impressive consistency.' },
    ],
  },
  {
    name: 'Aurora Vipers',
    gender: 'boys',
    colors: ['#64ffc2', '#0c2236'],
    slogan: 'Aurora speed with venomous defense.',
    rating: 77,
    roster: [
      { name: 'Isla Vale', age: 22, height: "6'0\"", origin: 'Helsinki, Finland', bio: 'A fast attacker with a fierce, precise strike.' },
      { name: 'Kade Rivers', age: 23, height: "6'1\"", origin: 'Stockholm, Sweden', bio: 'A strong libero who keeps the back line calm.' },
      { name: 'Maddie Snow', age: 21, height: "5'11\"", origin: 'Oslo, Norway', bio: 'A crisp passer who sets up her teammates with smooth feeds.' },
      { name: 'Felix Storm', age: 25, height: "6'3\"", origin: 'Copenhagen, Denmark', bio: 'A high-jumping blocker who controls the net.' },
      { name: 'Rae Winters', age: 24, height: "5'10\"", origin: 'Reykjavik, Iceland', bio: 'A resilient defender who rarely loses a rally.' },
      { name: 'Theo Pike', age: 22, height: "6'0\"", origin: 'Gothenburg, Sweden', bio: 'A quick attacker who feels the defense before it moves.' },
    ],
  },
  {
    name: 'Shadow Spartans',
    gender: 'boys',
    colors: ['#9177ff', '#10131c'],
    slogan: 'Dark streaks and unstoppable walls.',
    rating: 76,
    roster: [
      { name: 'Darius Voss', age: 24, height: "6'2\"", origin: 'San Francisco, USA', bio: 'A tough blocker with a relentless court presence.' },
      { name: 'Lila Cross', age: 23, height: "5'11\"", origin: 'Oakland, USA', bio: 'A clever attacker with a knack for finding seams.' },
      { name: 'Orion Hale', age: 22, height: "6'1\"", origin: 'Portland, USA', bio: 'A dynamic finisher who electrifies the crowd.' },
      { name: 'Eva Steel', age: 21, height: "5'10\"", origin: 'Seattle, USA', bio: 'A precise defender who thrives under pressure.' },
      { name: 'Rand Mason', age: 25, height: "6'3\"", origin: 'Denver, USA', bio: 'An imposing middle with sharp blocking instincts.' },
      { name: 'Nia Frost', age: 20, height: "5'9\"", origin: 'Salt Lake City, USA', bio: 'A lightning-fast libero who keeps every rally alive.' },
    ],
  },
  {
    name: 'Emerald Sirens',
    gender: 'girls',
    colors: ['#6ad39a', '#183f2f'],
    slogan: 'Graceful strikes with unstoppable chemistry.',
    rating: 90,
    roster: [
      { name: 'Ariella Moon', age: 20, height: "5'9\"", origin: 'Vancouver, Canada', bio: 'A polished captain who blends finesse with leadership on every play.' },
      { name: 'June Park', age: 19, height: "5'8\"", origin: 'Toronto, Canada', bio: 'Sharp setter with a talent for creating openings under pressure.' },
      { name: 'Mina Reyes', age: 21, height: "6'0\"", origin: 'Ottawa, Canada', bio: 'Athletic attacker who uses height and timing to overpower defenders.' },
      { name: 'Tessa Cole', age: 18, height: "5'10\"", origin: 'Calgary, Canada', bio: 'Fast court mover who disrupts passing lanes with quick coverage.' },
      { name: 'Lina Hart', age: 20, height: "5'11\"", origin: 'Montreal, Canada', bio: 'Versatile all-rounder with excellent accuracy and consistency.' },
      { name: 'Rey Santos', age: 22, height: "5'7\"", origin: 'Halifax, Canada', bio: 'Dynamic libero who reads the game ahead of the ball and keeps rallies alive.' },
    ],
  },
  {
    name: 'Velvet Valkyries',
    gender: 'girls',
    colors: ['#ff8af8', '#2f1b3b'],
    slogan: 'Bold, high-flying attack with iron discipline.',
    rating: 87,
    roster: [
      { name: 'Siena Vale', age: 21, height: "5'10\"", origin: 'Los Angeles, USA', bio: 'Explosive outside hitter with aggressive timing and fearless finishing.' },
      { name: 'Nora Chase', age: 20, height: "5'9\"", origin: 'San Diego, USA', bio: 'Creative playmaker with a strong sense for game rhythm.' },
      { name: 'Lyla Finch', age: 19, height: "5'8\"", origin: 'Las Vegas, USA', bio: 'Quick defender who turns blocks into fast counterattacks.' },
      { name: 'Maya Cross', age: 22, height: "6'0\"", origin: 'Portland, USA', bio: 'Powerful middle who finishes at high speed and with tough angles.' },
      { name: 'Zoe Kramer', age: 18, height: "5'7\"", origin: 'Austin, USA', bio: 'Smart backcourt specialist with pinpoint serve receives.' },
      { name: 'Rae Lin', age: 20, height: "5'11\"", origin: 'San Francisco, USA', bio: 'A rising star with exceptional court coverage and energy.' },
    ],
  },
  {
    name: 'Prism Phoenix',
    gender: 'girls',
    colors: ['#ffde7a', '#6b1f74'],
    slogan: 'Bright precision and explosive momentum.',
    rating: 85,
    roster: [
      { name: 'Nova Blake', age: 21, height: "5'11\"", origin: 'New York, USA', bio: 'A dynamic leader with a fast-paced attack and big-match mentality.' },
      { name: 'Celeste Rin', age: 19, height: "5'9\"", origin: 'Chicago, USA', bio: 'A tenacious libero whose fast hands keep her team in control.' },
      { name: 'Harper Lee', age: 22, height: "5'10\"", origin: 'Houston, USA', bio: 'Clutch outside hitter who delivers in high-pressure moments.' },
      { name: 'Tori Lane', age: 20, height: "5'8\"", origin: 'Dallas, USA', bio: 'Agile ball handler who orchestrates crisp offense from the back row.' },
      { name: 'Mia Santos', age: 18, height: "5'6\"", origin: 'Miami, USA', bio: 'Set specialist with a great feel for tempo and spacing.' },
      { name: 'Riley Fox', age: 21, height: "5'12\"", origin: 'Atlanta, USA', bio: 'A reliable finisher with strong timing on all her hits.' },
    ],
  },
  {
    name: 'Night Panthers',
    gender: 'girls',
    colors: ['#140a1f', '#b19cff'],
    slogan: 'Stealth offense with midnight steel.',
    rating: 83,
    roster: [
      { name: 'Kaia Brooks', age: 20, height: "5'10\"", origin: 'New Orleans, USA', bio: 'A defensive specialist with stunning reflexes and composure.' },
      { name: 'Esme Drake', age: 19, height: "5'8\"", origin: 'Charlotte, USA', bio: 'Smart setter who finds the smallest openings and spreads the attack.' },
      { name: 'Ivy Lane', age: 21, height: "5'9\"", origin: 'Memphis, USA', bio: 'A smooth passer and winner of many recovery battles.' },
      { name: 'Nina Vale', age: 18, height: "5'11\"", origin: 'Cleveland, USA', bio: 'A rising talent with a huge jump and strong court presence.' },
      { name: 'Lara Knight', age: 22, height: "5'12\"", origin: 'San Jose, USA', bio: 'Finishes rallies with calm precision even when the pace is relentless.' },
      { name: 'Sasha Ray', age: 20, height: "5'7\"", origin: 'Nashville, USA', bio: 'A quick transition player who flips defense into offense instantly.' },
    ],
  },
  {
    name: 'Radiant Swifts',
    gender: 'girls',
    colors: ['#ffd288', '#362b1d'],
    slogan: 'Lightning speed and stylish execution.',
    rating: 84,
    roster: [
      { name: 'Ayla Kim', age: 19, height: "5'8\"", origin: 'Seoul, South Korea', bio: 'An electrifying attacker with fastball precision and dazzling movement.' },
      { name: 'Mina Park', age: 20, height: "5'9\"", origin: 'Busan, South Korea', bio: 'A smart playmaker who keeps the offense flowing smoothly.' },
      { name: 'Hana Yoon', age: 21, height: "5'11\"", origin: 'Incheon, South Korea', bio: 'A dominant blocker who also contributes steady offense.' },
      { name: 'Soo-jin Lee', age: 18, height: "5'7\"", origin: 'Daegu, South Korea', bio: 'A confident passer and dangerous back-row threat.' },
      { name: 'Nari Choi', age: 20, height: "5'10\"", origin: 'Daejeon, South Korea', bio: 'Combines strategy with speed to outmaneuver every opponent.' },
      { name: 'Yuna Han', age: 22, height: "5'9\"", origin: 'Gwangju, South Korea', bio: 'A clutch performer in late-match scenarios with a sharp eye for gaps.' },
    ],
  },
  {
    name: 'Storm Sisters',
    gender: 'girls',
    colors: ['#4fa9ff', '#0d2b51'],
    slogan: 'Thunderous attack, steady teamwork.',
    rating: 82,
    roster: [
      { name: 'Skyla Rivers', age: 22, height: "5'11\"", origin: 'Perth, Australia', bio: 'A strong hitter with an unshakable presence in clutch rallies.' },
      { name: 'Bree Nolan', age: 20, height: "5'8\"", origin: 'Sydney, Australia', bio: 'A precise setter who controls pace and finds open lanes.' },
      { name: 'Mila Chen', age: 21, height: "5'9\"", origin: 'Brisbane, Australia', bio: 'A quick defender who keeps the back row formidable.' },
      { name: 'Tara Bell', age: 19, height: "5'10\"", origin: 'Adelaide, Australia', bio: 'A powerful server with excellent timing for go-ahead points.' },
      { name: 'Nia Hale', age: 18, height: "5'7\"", origin: 'Melbourne, Australia', bio: 'A smart wing who exploits holes in the defense with sharp angles.' },
      { name: 'Jade Summers', age: 20, height: "5'12\"", origin: 'Hobart, Australia', bio: 'A balanced attacker who supports every part of the team.' },
    ],
  },
  {
    name: 'Coral Comets',
    gender: 'girls',
    colors: ['#ff9fa0', '#3b1a22'],
    slogan: 'Bright offense and unstoppable energy.',
    rating: 80,
    roster: [
      { name: 'Mia Cole', age: 18, height: "5'8\"", origin: 'Auckland, New Zealand', bio: 'A quick attacker with strong instincts in transition play.' },
      { name: 'Riley Storm', age: 19, height: "5'9\"", origin: 'Wellington, New Zealand', bio: 'A crafty setter who keeps opponents scrambling with creative distribution.' },
      { name: 'Zoey Lane', age: 21, height: "5'10\"", origin: 'Christchurch, New Zealand', bio: 'An agile defender who turns pressure into momentum with smart saves.' },
      { name: 'Harper Quinn', age: 20, height: "5'11\"", origin: 'Hamilton, New Zealand', bio: 'A versatile hitter with a flair for dramatic finishes.' },
      { name: 'Lacey Starr', age: 22, height: "5'7\"", origin: 'Tauranga, New Zealand', bio: 'A dynamic back-row specialist who reads the game exceptionally well.' },
      { name: 'June Lee', age: 19, height: "5'6\"", origin: 'Nelson, New Zealand', bio: 'A dependable passer with a powerful and accurate serve.' },
    ],
  },
  {
    name: 'Mystic Merlins',
    gender: 'girls',
    colors: ['#9c72ff', '#161035'],
    slogan: 'Magical linkups and swift scoring runs.',
    rating: 78,
    roster: [
      { name: 'Elin Grey', age: 21, height: "5'10\"", origin: 'London, UK', bio: 'A clever attacker who uses edges and angles to great effect.' },
      { name: 'Faye Archer', age: 20, height: "5'9\"", origin: 'Manchester, UK', bio: 'An agile court general with excellent ball placement.' },
      { name: 'Isla Reed', age: 19, height: "5'8\"", origin: 'Edinburgh, UK', bio: 'A smart blocker who reads opponent sets quickly and efficiently.' },
      { name: 'Nora Vale', age: 22, height: "5'11\"", origin: 'Bristol, UK', bio: 'A powerful flank hitter with a talent for clutch spikes.' },
      { name: 'Mira Knox', age: 18, height: "5'7\"", origin: 'Belfast, UK', bio: 'A tenacious libero whose energy lifts the whole defense.' },
      { name: 'Lena Storm', age: 20, height: "5'10\"", origin: 'Cardiff, UK', bio: 'A quick attacker with remarkable timing and court presence.' },
    ],
  },
  {
    name: 'Diamond Dolphins',
    gender: 'girls',
    colors: ['#8decff', '#1b3f57'],
    slogan: 'Fluid movement and brilliant teamwork.',
    rating: 79,
    roster: [
      { name: 'Nina Ocean', age: 20, height: "5'11\"", origin: 'Stockholm, Sweden', bio: 'A polished attacker with smooth technique and calm decision-making.' },
      { name: 'Freya Hansen', age: 21, height: "5'8\"", origin: 'Copenhagen, Denmark', bio: 'A tenacious defender known for saving impossible balls.' },
      { name: 'Emma Soren', age: 19, height: "5'9\"", origin: 'Oslo, Norway', bio: 'A fast setter who can change the tempo in an instant.' },
      { name: 'Lina Gray', age: 22, height: "5'10\"", origin: 'Helsinki, Finland', bio: 'A deadly finisher with a smart sense for crowding the net.' },
      { name: 'Julie Stone', age: 18, height: "5'7\"", origin: 'Reykjavik, Iceland', bio: 'A scrappy back-row specialist with huge endurance.' },
      { name: 'Sara Lund', age: 20, height: "5'8\"", origin: 'Aarhus, Denmark', bio: 'A balanced playmaker with strong all-around ability.' },
    ],
  },
  {
    name: 'Sable Stingers',
    gender: 'girls',
    colors: ['#3f1f1f', '#ffb05b'],
    slogan: 'Sharp attacks with dark intensity.',
    rating: 77,
    roster: [
      { name: 'Nia Brooks', age: 22, height: "5'10\"", origin: 'Cape Town, South Africa', bio: 'A relentless attacker who brings power and precision each rally.' },
      { name: 'Liya Stone', age: 20, height: "5'9\"", origin: 'Johannesburg, South Africa', bio: 'A gifted setter who keeps the offense unpredictable.' },
      { name: 'Asha Grey', age: 19, height: "5'8\"", origin: 'Durban, South Africa', bio: 'A lively defender with quick reflexes and strong instincts.' },
      { name: 'Raya Khan', age: 21, height: "5'11\"", origin: 'Nairobi, Kenya', bio: 'A tall attacker with powerful swings and smart shot placement.' },
      { name: 'Imani Shaw', age: 18, height: "5'7\"", origin: 'Accra, Ghana', bio: 'A speedy cover player whose hustle forces opponents into errors.' },
      { name: 'Tiana Cole', age: 20, height: "5'8\"", origin: 'Lagos, Nigeria', bio: 'A versatile contributor who excels in both offense and defense.' },
    ],
  },
  {
    name: 'Golden Griffons',
    gender: 'girls',
    colors: ['#ffd45a', '#3f2f0f'],
    slogan: 'Royal tempo and bold finishes.',
    rating: 76,
    roster: [
      { name: 'Adele Frost', age: 20, height: "5'10\"", origin: 'Dublin, Ireland', bio: 'A strong wing who attacks with confidence from every corner.' },
      { name: 'Maeve O’Brien', age: 19, height: "5'8\"", origin: 'Galway, Ireland', bio: 'A controlling setter with exceptional court awareness.' },
      { name: 'Ciara Flynn', age: 21, height: "5'9\"", origin: 'Cork, Ireland', bio: 'A steady middle with sharp timing and good jumps.' },
      { name: 'Roisin Byrne', age: 18, height: "5'7\"", origin: 'Limerick, Ireland', bio: 'A gritty defender who never lets a ball drop.' },
      { name: 'Clara Nolan', age: 22, height: "5'11\"", origin: 'Belfast, Northern Ireland', bio: 'A polished hitter with smart shot selection and consistency.' },
      { name: 'Fiona Quinn', age: 20, height: "5'8\"", origin: 'Sligo, Ireland', bio: 'An energetic floor leader who keeps the team motivated.' },
    ],
  },
  {
    name: 'Arctic Flames',
    gender: 'girls',
    colors: ['#d4f7ff', '#113746'],
    slogan: 'Cold focus with hot offense.',
    rating: 75,
    roster: [
      { name: 'Runa Storm', age: 20, height: "5'11\"", origin: 'Reykjavik, Iceland', bio: 'A calm competitor who finds open space and finishes with ease.' },
      { name: 'Freja Nor', age: 19, height: "5'9\"", origin: 'Bergen, Norway', bio: 'A fast attacker with excellent transition footwork.' },
      { name: 'Sofia Nils', age: 21, height: "5'8\"", origin: 'Stockholm, Sweden', bio: 'A smart passer who keeps the offense well-balanced.' },
      { name: 'Tilde Fjord', age: 18, height: "5'10\"", origin: 'Oslo, Norway', bio: 'A strong middle with precise timing and quick hands.' },
      { name: 'Emilia Vale', age: 22, height: "5'7\"", origin: 'Helsinki, Finland', bio: 'A flexible defender whose energy lifts her entire side.' },
      { name: 'Kira West', age: 20, height: "5'10\"", origin: 'Tampere, Finland', bio: 'A smart finisher with a sharp sense for where the defense is weakest.' },
    ],
  },
];

const teamGridBoys = document.getElementById('teamGridBoys');
const teamGridGirls = document.getElementById('teamGridGirls');
const favoriteTeamSelect = document.getElementById('favoriteTeam');
const favoriteCard = document.getElementById('favoriteCard');
const predictTeamA = document.getElementById('predictTeamA');
const predictTeamB = document.getElementById('predictTeamB');
const simTeamA = document.getElementById('simTeamA');
const simTeamB = document.getElementById('simTeamB');
const predictButton = document.getElementById('predictButton');
const predictionPanel = document.getElementById('predictionPanel');
const predictionText = predictionPanel.querySelector('.prediction-text');
const buttonTeamA = document.getElementById('buttonTeamA');
const buttonTeamB = document.getElementById('buttonTeamB');
const scoreA = document.getElementById('scoreA');
const scoreB = document.getElementById('scoreB');
const simulateButton = document.getElementById('simulateButton');
const scoreValueA = document.getElementById('scoreValueA');
const scoreValueB = document.getElementById('scoreValueB');
const scoreTeamA = document.getElementById('scoreTeamA');
const scoreTeamB = document.getElementById('scoreTeamB');
const possessionText = document.getElementById('possessionText');
const logList = document.getElementById('logList');
const playLofiBtn = document.getElementById('playLofiBtn');
const heroButtons = document.querySelectorAll('.hero-buttons button[data-target]');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const loginStatus = document.getElementById('loginStatus');
const loginName = document.getElementById('loginName');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginMethods = document.getElementById('loginMethods');
const cheerButtonsContainer = document.getElementById('cheerButtons');
const voteSummary = document.getElementById('voteSummary');
const chatFeed = document.getElementById('chatFeed');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const standingsTableBody = document.querySelector('#standingsTable tbody');
const premiumBanner = document.getElementById('premiumBanner');
const streakCount = document.getElementById('streakCount');
const premiumStatus = document.getElementById('premiumStatus');
const highlightGrid = document.getElementById('highlightGrid');
const rulebookGrid = document.getElementById('rulebookGrid');
const courtScene = document.getElementById('courtScene');
const playVideoBtn = document.getElementById('playVideoBtn');
const videoStatus = document.getElementById('videoStatus');
const videoTranscript = document.getElementById('videoTranscript');
const heroBannerText = document.getElementById('heroBannerText');
const liveFeed = document.getElementById('liveFeed');
const liveInput = document.getElementById('liveInput');
const liveSend = document.getElementById('liveSend');
let audioContext;
let isMusicPlaying = false;
let currentUser = null;
let votes = teams.map(() => 0);
let standings = [];
let streakDays = 0;
let premiumActive = false;
let heroBannerIndex = 0;
let liveGuests = [
  'MayaFan',
  'VolleyVictor',
  'AerialAce',
  'CourtQueen',
  'SpikeSpectre',
];

const rulebookItems = [
  {
    title: 'Hybrid Court & Team Balance',
    bullets: [
      'Volleystrike is played on a symmetric court with a central net and two equal penalty zones, so both footwork and net timing matter.',
      'Teams keep a fixed 9-player on-court formation with rotating positions after each point to preserve balanced skill demands.',
    ],
  },
  {
    title: 'Serve, Set, and Strike',
    bullets: [
      'Matches begin with a floating serve or a controlled foot pass that must cross the net without being caught.',
      'Each side may use up to 3 contacts before sending the ball back, including hands, arms, or a single legal foot touch per rally.',
    ],
  },
  {
    title: 'Fair Scoring System',
    bullets: [
      'A standard point is awarded for landing the ball in the opponent zone or forcing an illegal return.',
      'Bonus value is identical for a hand-powered spike or a foot-powered finish — every successful play requires equal teamwork and control.',
    ],
  },
  {
    title: 'Neutral Skill Requirement',
    bullets: [
      'Players must demonstrate both football-style ball control and volleyball-style net play during each set.',
      'Ball handling, passing, and defensive coverage are weighted equally to keep the sport accessible yet competitive.',
    ],
  },
  {
    title: 'Simple Fouls & Reset Rules',
    bullets: [
      'No carrying, throwing, or double foot dribble. One foot contact may be used to redirect the ball, then the rally must continue with clean touches.',
      'Net contact, line crossing, and unsportsmanlike behavior are penalized immediately to keep play fair and flowing.',
    ],
  },
  {
    title: 'Match Format',
    bullets: [
      'Matches are played in best-of-5 sets, with each set ending once a team reaches 25 points and leads by 2.',
      'Set wins reflect overall court control, so both defensive saves and aggressive finishing count equally in Volleystrike.',
    ],
  },
];

const heroBannerMessages = [
  'Jamaica College remains unbeaten and fan momentum is surging.',
  'Live now: 9,420 fans cheering in the arena. Trend: Solar Surge upset alert.',
  'Latest highlight: Neon Raptors scored an epic sky smash in the final set.',
  'Premium users get advanced analytics, streak badges, and exclusive chat emotes.',
  'Fan vote power is rising. Cheer your club to influence the next match simulation.',
];

const weeklyHighlights = [
  {
    title: 'Sky Smash Showdown',
    team: 'Neon Raptors',
    detail: 'A last-second sky smash turned the tide versus Iron Waves.',
    color: '#81f4ff',
  },
  {
    title: 'Aerial Lockdown',
    team: 'Jamaica College',
    detail: 'Zak Matthews’ 7-block sequence sealed the first set.',
    color: '#08c16f',
  },
  {
    title: 'Fan Frenzy',
    team: 'Solar Surge',
    detail: 'The crowd erupted after a lightning-quick breakaway point.',
    color: '#ffd67a',
  },
  {
    title: 'Momentum Run',
    team: 'Titan Rush',
    detail: 'A 5-point rally in the third quarter gave them an edge.',
    color: '#f2584b',
  },
];

function createTeamCard(team) {
  const card = document.createElement('article');
  card.className = 'team-card';
  card.style.setProperty('--team-main', team.colors[0]);
  card.style.setProperty('--team-accent', team.colors[1]);
  card.innerHTML = `
    <div class="top-row">
      <div class="team-avatar" style="background: linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]}); color: #041018;">${team.name.split(' ').map(w => w[0]).join('')}</div>
      <div class="team-badge" style="background: ${team.colors[1]}22; color: ${team.colors[0]}; border-color: ${team.colors[1]}33;">${team.name}</div>
    </div>
    <div class="team-info">
      <h3>${team.name}</h3>
      <p>${team.slogan}</p>
    </div>
    <div class="team-pattern"></div>
    <div class="team-roster">
      ${team.roster
        .map(
          (member) => `<div class="team-player"><strong>${member.name}</strong><span class="player-detail">Age ${member.age} · ${member.height} · ${member.origin}</span><span class="player-bio">${member.bio}</span></div>`
        )
        .join('')}
    </div>
  `;
  return card;
}

function populateTeamLists() {
  const boys = teams.filter(team => team.gender === 'boys');
  const girls = teams.filter(team => team.gender === 'girls');

  boys.forEach((team) => {
    teamGridBoys.appendChild(createTeamCard(team));
  });
  girls.forEach((team) => {
    teamGridGirls.appendChild(createTeamCard(team));
  });

  teams.forEach((team, index) => {
    const option = new Option(team.name, index);
    favoriteTeamSelect.append(option.cloneNode(true));
    predictTeamA.append(option.cloneNode(true));
    predictTeamB.append(option.cloneNode(true));
    simTeamA.append(option.cloneNode(true));
    simTeamB.append(option.cloneNode(true));
  });
}

function updateFavoriteCard() {
  const selected = teams[favoriteTeamSelect.value];
  if (!selected) {
    favoriteCard.innerHTML = '<div class="favorite-badge">No team selected yet</div>';
    return;
  }
  favoriteCard.innerHTML = `
    <div>
      <div class="team-badge" style="background: ${selected.colors[1]}22; color: ${selected.colors[0]}; border-color: ${selected.colors[1]}33;">Rooting for</div>
      <h3 style="margin: 14px 0 8px; color: ${selected.colors[0]};">${selected.name}</h3>
      <p>${selected.slogan}</p>
    </div>
    <div style="display:flex; align-items:center; justify-content:center; gap:12px;">
      <span style="display:inline-flex;width:48px;height:48px;border-radius:16px;background: linear-gradient(135deg, ${selected.colors[0]}, ${selected.colors[1]});font-weight:800;align-items:center;justify-content:center;color:#07101d;">${selected.name.split(' ').map(w => w[0]).join('')}</span>
    </div>
  `;
}

function getPredictionChance(teamA, teamB) {
  const baseA = teamA.rating;
  const baseB = teamB.rating;
  const advantage = (baseA - baseB) * 1.25;
  const rawA = 50 + advantage + Math.random() * 10 - 5;
  const aChance = Math.max(12, Math.min(88, rawA));
  return [Math.round(aChance), 100 - Math.round(aChance)];
}

function createVoteButtons() {
  cheerButtonsContainer.innerHTML = '';
  teams.forEach((team, index) => {
    const button = document.createElement('button');
    button.className = 'vote-button';
    button.textContent = `${team.name} Cheer`;
    button.addEventListener('click', () => castVote(index));
    cheerButtonsContainer.appendChild(button);
  });
}

function loadVoteSummary() {
  const total = votes.reduce((sum, value) => sum + value, 0) || 1;
  const topRows = teams
    .map((team, idx) => ({ team, count: votes[idx], rank: idx }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  voteSummary.innerHTML = `
    <div class="progress-board">
      ${topRows
        .map(
          (entry) => `
            <div class="progress-row">
              <span class="progress-label">${entry.team.name}</span>
              <div class="progress-bar"><div class="progress-fill" style="width:${Math.round((entry.count / total) * 100)}%"></div></div>
              <span>${entry.count} cheers</span>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}

function castVote(index) {
  if (!currentUser) {
    alert('Please sign in to cast your cheer vote.');
    return;
  }
  votes[index] += 1;
  const team = teams[index];
  appendChatMessage('assistant', `Nice! ${currentUser.name} just boosted support for ${team.name}. The crowd is louder now.`);
  loadVoteSummary();
}

function createChatMessage(content, sender) {
  const message = document.createElement('div');
  message.className = `chat-message ${sender}`;
  message.textContent = content;
  return message;
}

function appendChatMessage(sender, content) {
  const message = createChatMessage(content, sender);
  chatFeed.appendChild(message);
  chatFeed.scrollTop = chatFeed.scrollHeight;
}

function appendLiveMessage(sender, content) {
  const message = document.createElement('div');
  message.className = `chat-message ${sender}`;
  message.textContent = content;
  liveFeed.appendChild(message);
  liveFeed.scrollTop = liveFeed.scrollHeight;
}

function handleLiveSend() {
  const text = liveInput.value.trim();
  if (!text) return;
  if (!currentUser) {
    alert('Sign in to chat live with the Volleystrike community.');
    return;
  }
  appendLiveMessage('user', `${currentUser.name}: ${text}`);
  liveInput.value = '';
}

function createChatReply(prompt) {
  const lower = prompt.trim().toLowerCase();
  const teamNames = teams.map(t => t.name.toLowerCase());

  if (!lower) {
    return 'Ask me anything about matchups, player form, or who has the strongest lineup in Volleystrike.';
  }
  if (lower.includes('james') || lower.includes('zak') || lower.includes('jamaica college')) {
    return 'Jamaica College is the league favorite, anchored by Zak Matthews. They are currently the top seed because of their balance, pace, and aerial control.';
  }
  if (lower.includes('predict') || lower.includes('win') || lower.includes('forecast')) {
    const team = teamNames.find(name => lower.includes(name));
    if (team) {
      return `Based on recent form, ${team} is strong in Volleystrike, but upsets are always possible when a rival controls possession. Try the predictor for a detailed forecast.`;
    }
    return 'Every match is unique in Volleystrike. Pick both teams in the predictor so I can give you a more precise forecast.';
  }
  if (lower.includes('fan') || lower.includes('cheer')) {
    return 'Fans can cheer for any team from the Fan Zone. Sign in first, then tap on your team to raise the crowd energy and fan momentum.';
  }
  if (lower.includes('best player') || lower.includes('player')) {
    return 'Zak Matthews is the best player in Volleystrike, but keep an eye on Nia Brown, Cloud Vega, and Maya Rivers — they all change the game with clutch plays.';
  }
  return 'Volleystrike blends the best of football and volleyball. Ask me about teams, standings, how to simulate a match, or which club has the strongest attack today.';
}

function handleChatSend() {
  const question = chatInput.value.trim();
  if (!question) return;
  appendChatMessage('user', question);
  chatInput.value = '';
  const reply = createChatReply(question);
  setTimeout(() => appendChatMessage('assistant', reply), 500);
}

function loadStandings() {
  standings = [...teams]
    .sort((a, b) => b.rating - a.rating)
    .map((team, index) => ({
      rank: index + 1,
      team,
      record: `${12 - index}-${index + 2}-${1}`,
      fanPower: `${Math.max(30, 100 - index * 4)}%`,
    }));

  standingsTableBody.innerHTML = standings
    .map(
      (entry) => `
        <tr>
          <td>${entry.rank}</td>
          <td>
            <div class="standings-team-cell">
              <span class="standings-team-name">${entry.team.name}</span>
              <span class="standings-team-slogan">${entry.team.slogan}</span>
            </div>
          </td>
          <td>${entry.record}</td>
          <td>${entry.team.rating}</td>
          <td>${entry.fanPower}</td>
        </tr>
      `
    )
    .join('');
}

function populateRulebookGrid() {
  if (!rulebookGrid) return;
  rulebookGrid.innerHTML = rulebookItems
    .map(
      (rule) => `
        <article class="rulebook-card">
          <h3>${rule.title}</h3>
          <p>${rule.bullets[0]}</p>
          <ul>
            ${rule.bullets.slice(1).map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function populateCourtModel() {
  if (!courtScene) return;
  const colors = ['player-blue', 'player-pink', 'player-white'];
  const roles = ['A', 'B', 'C', 'D', 'E', 'F'];
  courtScene.querySelectorAll('.player-marker').forEach((node) => node.remove());
  roles.forEach((role, index) => {
    const marker = document.createElement('div');
    marker.className = `player-marker ${colors[index % colors.length]}`;
    marker.dataset.role = role;
    marker.style.left = `${16 + index * 12}%`;
    marker.style.top = `${18 + (index % 3) * 24}%`;
    marker.innerHTML = `<span>${role}</span>`;
    courtScene.appendChild(marker);
  });
}

function animateCourtModel() {
  if (!courtScene) return;
  const players = Array.from(courtScene.querySelectorAll('.player-marker'));
  players.forEach((player, idx) => {
    const phase = idx * 0.44;
    const path = () => {
      const time = performance.now() / 900;
      const x = 50 + Math.sin(time + phase) * (18 - idx * 1.2);
      const y = 32 + Math.cos(time * 1.15 + phase) * (12 + idx * 0.8);
      player.style.left = `${x}%`;
      player.style.top = `${y}%`;
    };
    player.pathAnimation = path;
  });
  function step() {
    players.forEach((player) => player.pathAnimation && player.pathAnimation());
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function setVideoPreview(status) {
  if (!videoStatus) return;
  videoStatus.textContent = status;
}

function updateVideoTranscript(text) {
  if (!videoTranscript) return;
  videoTranscript.textContent = text;
}

function handlePlayVideo() {
  const script = [
    'Welcome to the Volleystrike court. This arena blends a central net with balanced attack and defense zones.',
    'Players rotate through both footwork and net-based roles, keeping skill requirements even across the court.',
    'Watch the blue markers move forward to attack while pink markers support from the backcourt.',
    'The AI narrator highlights how formation, timing, and teamwork create the signature Volleystrike flow.',
  ];

  if (!playVideoBtn) return;
  let step = 0;
  playVideoBtn.textContent = 'Playing Preview';
  playVideoBtn.disabled = true;
  if (courtScene) courtScene.classList.add('playing');
  setVideoPreview('AI showcase starting: court introduction and player movement.');
  updateVideoTranscript(script[0]);

  const intervalId = setInterval(() => {
    step += 1;
    if (step >= script.length) {
      clearInterval(intervalId);
      setVideoPreview('AI narrator finished the walkthrough. Tap replay to review the formation again.');
      if (playVideoBtn) {
        playVideoBtn.textContent = 'Replay AI Showcase';
        playVideoBtn.disabled = false;
      }
      if (courtScene) courtScene.classList.remove('playing');
      return;
    }
    setVideoPreview(`AI showcase: step ${step + 1} of ${script.length}.`);
    updateVideoTranscript(script[step]);
  }, 2400);
}

function populateHighlightGrid() {
  if (!highlightGrid) return;
  highlightGrid.innerHTML = weeklyHighlights
    .map(
      (item) => `
        <article class="highlight-card" style="border-color: ${item.color}33; background: linear-gradient(180deg, rgba(10, 21, 40, 0.96), rgba(7, 12, 24, 0.96));">
          <div class="highlight-tag" style="background: ${item.color}20; color: ${item.color};">${item.team}</div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join('');
}

function rotateHeroBanner() {
  heroBannerText.textContent = heroBannerMessages[heroBannerIndex];
  setInterval(() => {
    heroBannerIndex = (heroBannerIndex + 1) % heroBannerMessages.length;
    heroBannerText.classList.remove('fade-in');
    void heroBannerText.offsetWidth;
    heroBannerText.textContent = heroBannerMessages[heroBannerIndex];
    heroBannerText.classList.add('fade-in');
  }, 5200);
}

function setupRevealObserver() {
  const reveals = document.querySelectorAll('.section-panel, .team-card, .chat-panel, .standings-table-wrap, .game-panel, .login-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  reveals.forEach((node) => observer.observe(node));
}

function handleLogin() {
  const name = loginName.value.trim();
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  if (!name || !email || !password) {
    alert('Enter a nickname, email, and password to sign in.');
    return;
  }
  const previousLogin = localStorage.getItem(`volleystrike-user-${email}`);
  const now = new Date().toISOString();

  if (previousLogin) {
    streakDays = Math.min(30, parseInt(localStorage.getItem(`volleystrike-streak-${email}`) || '0', 10) + 1);
  } else {
    streakDays = 1;
  }

  localStorage.setItem(`volleystrike-user-${email}`, now);
  localStorage.setItem(`volleystrike-streak-${email}`, streakDays.toString());
  localStorage.setItem('volleystrike-current-user', JSON.stringify({ name, email }));

  currentUser = { name, email };
  premiumActive = true;
  loginStatus.textContent = `Signed in as ${name}`;
  premiumStatus.textContent = 'Premium trial active';
  streakCount.textContent = `${streakDays} day${streakDays === 1 ? '' : 's'}`;
  premiumBanner.textContent = 'Free Premium Month unlocked on sign-in. Live chat and premium features are enabled.';

  loginName.value = '';
  loginEmail.value = '';
  loginPassword.value = '';
  appendChatMessage('assistant', `Welcome, ${name}! Enjoy your free premium month and start cheering for your team.`);
  appendLiveMessage('system', `${name} joined the live room. Welcome to the community!`);
}

function simulateSocialLogin(method) {
  const name = `${method}Fan`;
  const email = `${method.toLowerCase()}@volleystrike.fake`;
  currentUser = { name, email };
  streakDays = 1;
  premiumActive = true;
  localStorage.setItem('volleystrike-current-user', JSON.stringify(currentUser));
  localStorage.setItem('volleystrike-streak', '1');

  loginStatus.textContent = `Signed in as ${name}`;
  premiumStatus.textContent = 'Premium trial active';
  streakCount.textContent = '1 day';
  premiumBanner.textContent = `Signed in with ${method}. Free Premium Month is active!`;

  appendChatMessage('assistant', `Welcome, ${name}! Your premium trial is active and live chat is ready.`);
  appendLiveMessage('system', `${name} joined the live room via ${method}.`);
}

function handleLogout() {
  if (currentUser) {
    appendLiveMessage('system', `${currentUser.name} left the live room.`);
  }
  currentUser = null;
  localStorage.removeItem('volleystrike-current-user');
  loginStatus.textContent = 'Not signed in';
  premiumStatus.textContent = 'Free trial active';
  streakDays = 0;
  streakCount.textContent = '0 days';
  premiumActive = false;
  appendChatMessage('assistant', 'You have signed out. Sign in again to keep your streak and premium access active.');
}

function loadSavedSession() {
  const saved = localStorage.getItem('volleystrike-current-user');
  if (!saved) {
    return;
  }
  try {
    const { name, email } = JSON.parse(saved);
    const savedStreak = parseInt(localStorage.getItem(`volleystrike-streak-${email}`) || localStorage.getItem('volleystrike-streak') || '1', 10);
    const now = new Date().toISOString();
    localStorage.setItem(`volleystrike-user-${email}`, now);
    currentUser = { name, email };
    streakDays = savedStreak;
    premiumActive = true;
    loginStatus.textContent = `Signed in as ${name}`;
    premiumStatus.textContent = 'Premium trial active';
    streakCount.textContent = `${streakDays} day${streakDays === 1 ? '' : 's'}`;
    premiumBanner.textContent = 'Welcome back! Your premium trial is still active.';
    appendLiveMessage('system', `${name} returned to the live room.`);
  } catch (error) {
    localStorage.removeItem('volleystrike-current-user');
  }
}

function animatePrediction(teamA, teamB, percentA, percentB) {
  buttonTeamA.textContent = teamA.name;
  buttonTeamB.textContent = teamB.name;
  scoreA.style.width = `${percentA}%`;
  scoreB.style.width = `${percentB}%`;
  predictionText.textContent = `Volleystrike AI predicts ${percentA > percentB ? teamA.name : teamB.name} will win. Match momentum, form, and court control were all analyzed.`;
}

function showPrediction() {
  const a = teams[predictTeamA.value];
  const b = teams[predictTeamB.value];
  if (!a || !b || a.name === b.name) {
    predictionText.textContent = 'Select two different teams to generate a forecast.';
    return;
  }
  const [percentA, percentB] = getPredictionChance(a, b);
  animatePrediction(a, b, percentA, percentB);
}

function simulateMatch() {
  const a = teams[simTeamA.value];
  const b = teams[simTeamB.value];
  if (!a || !b || a.name === b.name) {
    alert('Please pick two different teams for the showdown.');
    return;
  }

  const scoreAVal = 0;
  const scoreBVal = 0;
  let teamAScore = 0;
  let teamBScore = 0;
  scoreValueA.textContent = '0';
  scoreValueB.textContent = '0';
  scoreTeamA.querySelector('.team-name').textContent = a.name;
  scoreTeamB.querySelector('.team-name').textContent = b.name;
  logList.innerHTML = '';
  possessionText.textContent = 'Kickoff to ' + a.name;

  const timeline = [];
  const rounds = 10;
  let current = Math.random() > 0.45 ? a : b;

  for (let i = 1; i <= rounds; i += 1) {
    const possessionTextLine = `${current.name} takes control and charges toward the net.`;
    timeline.push({ text: possessionTextLine, team: current });
    if (Math.random() * 100 < current.rating * 0.9) {
      if (current === a) {
        teamAScore += 1;
      } else {
        teamBScore += 1;
      }
      timeline.push({ text: `Goal! ${current.name} converts the volleystrike play.`, team: current });
    } else {
      current = current === a ? b : a;
      timeline.push({ text: `${current.name} swipes possession in a fast counter.`, team: current });
    }
  }

  const displayTimeline = timeline.map(entry => ({ ...entry, text: `• ${entry.text}` }));
  logList.innerHTML = displayTimeline.map(log => `<li>${log.text}</li>`).join('');
  scoreValueA.textContent = teamAScore;
  scoreValueB.textContent = teamBScore;
  possessionText.textContent = `${current.name} controls the ball after the final surge.`;

  animateBallPossession(current === a ? 0 : 1);
}

function animateBallPossession(sideIndex) {
  const ball = document.getElementById('ballIcon');
  ball.animate(
    [
      { transform: 'translateX(0) scale(1)' },
      { transform: `translateX(${sideIndex === 0 ? '-36px' : '36px'}) scale(1.05)` },
      { transform: 'translateX(0) scale(1)' },
    ],
    { duration: 900, easing: 'ease-in-out', iterations: 2 }
  );
}

function initAudio() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    playLofiBtn.textContent = 'Audio unsupported';
    return;
  }
  if (audioContext) {
    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {});
    }
    return;
  }

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const master = audioContext.createGain();
  master.gain.value = 0.22;
  master.connect(audioContext.destination);

  const bassGain = audioContext.createGain();
  bassGain.gain.value = 0.18;
  bassGain.connect(master);

  const snareGain = audioContext.createGain();
  snareGain.gain.value = 0.06;
  snareGain.connect(master);

  const hatGain = audioContext.createGain();
  hatGain.gain.value = 0.04;
  hatGain.connect(master);

  const synthGain = audioContext.createGain();
  synthGain.gain.value = 0.08;
  synthGain.connect(master);

  const bassOsc = audioContext.createOscillator();
  bassOsc.type = 'sine';
  bassOsc.frequency.value = 55;
  bassOsc.connect(bassGain);
  bassOsc.start();

  function playDrum(time, frequency, duration, gainNode) {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'triangle';
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.28, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
    osc.connect(gain).connect(gainNode);
    osc.start(time);
    osc.stop(time + duration);
  }

  function playHat(time) {
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.02, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / data.length);
    }
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 9000;
    noise.connect(filter).connect(hatGain);
    noise.start(time);
  }

  function playPattern() {
    const now = audioContext.currentTime;
    const beat = 0.32;
    playDrum(now, 80, 0.16, bassGain);
    playHat(now + beat * 0.5);
    playDrum(now + beat * 1, 120, 0.12, snareGain);
    playHat(now + beat * 1.5);
    playDrum(now + beat * 2, 80, 0.16, bassGain);
    playHat(now + beat * 2.5);
  }

  function playMelody() {
    const now = audioContext.currentTime;
    const notes = [220, 246.94, 196, 233.08, 261.63];
    notes.forEach((freq, index) => {
      const osc = audioContext.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      const env = audioContext.createGain();
      env.gain.setValueAtTime(0.02, now + index * 0.22);
      env.gain.exponentialRampToValueAtTime(0.001, now + index * 0.22 + 0.32);
      osc.connect(env).connect(synthGain);
      osc.start(now + index * 0.22);
      osc.stop(now + index * 0.22 + 0.32);
    });
  }

  setInterval(() => {
    playPattern();
    playMelody();
  }, 960);

  audioContext.resume().then(() => {
    isMusicPlaying = true;
    playLofiBtn.textContent = 'Dancehall Atmosphere Active';
  }).catch(() => {
    playLofiBtn.textContent = 'Tap to unlock Dancehall Atmosphere';
  });
}

function attachListeners() {
  favoriteTeamSelect.addEventListener('change', updateFavoriteCard);
  predictButton.addEventListener('click', showPrediction);
  simulateButton.addEventListener('click', simulateMatch);
  loginButton.addEventListener('click', handleLogin);
  logoutButton.addEventListener('click', handleLogout);
  loginMethods.addEventListener('click', (event) => {
    if (event.target.matches('.social-login')) {
      const method = event.target.dataset.method;
      simulateSocialLogin(method);
    }
  });
  chatSend.addEventListener('click', handleChatSend);
  chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleChatSend();
    }
  });
  liveSend.addEventListener('click', handleLiveSend);
  liveInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleLiveSend();
    }
  });
  playLofiBtn.addEventListener('click', () => {
    initAudio();
  });
  document.body.addEventListener('pointerdown', () => {
    if (!audioContext) {
      initAudio();
    } else if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {});
    }
  }, { once: true, passive: true });
  heroButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector(button.dataset.target).scrollIntoView({ behavior: 'smooth' });
    });
  });
  if (playVideoBtn) {
    playVideoBtn.addEventListener('click', handlePlayVideo);
  }
}

function init() {
  populateTeamLists();
  loadSavedSession();
  updateFavoriteCard();
  attachListeners();
  createVoteButtons();
  loadVoteSummary();
  loadStandings();
  populateHighlightGrid();
  populateRulebookGrid();
  populateCourtModel();
  animateCourtModel();
  rotateHeroBanner();
  setupRevealObserver();
  initAudio();
  predictTeamA.selectedIndex = 0;
  predictTeamB.selectedIndex = 1;
  simTeamA.selectedIndex = 0;
  simTeamB.selectedIndex = 1;
  showPrediction();
  appendChatMessage('assistant', 'Hello! I am your Volleystrike assistant. Ask about teams, matchups, fan momentum, or league stats.');
  appendLiveMessage('assistant', 'Live room ready. Chat with other fans when you sign in.');
}

init();
