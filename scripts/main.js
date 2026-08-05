const teams = [
  {
    name: 'Jamaica College',
    gender: 'boys',
    colors: ['#08c16f', '#f7d948'],
    slogan: 'Aerial power meets precision strike.',
    rating: 98,
    roster: [
      { name: 'Zak Matthews', age: 25, height: "5'10\"", origin: 'Saint Andrew, Jamaica', bio: 'A powerful outside hitter with high-flying net attacks.' },
      { name: 'Evan Reid', age: 23, height: "6'1\"", origin: 'Kingston, Jamaica', bio: 'A quick passer with explosive first-step offense.' },
      { name: 'Andre Shaw', age: 22, height: "6'3\"", origin: 'Spanish Town, Jamaica', bio: 'A towering middle blocker who shuts down the net.' },
      { name: 'Malik Thomas', age: 21, height: "6'0\"", origin: 'Portmore, Jamaica', bio: 'A precise setter who runs rapid transition plays.' },
      { name: 'Jordan Bailey', age: 24, height: "5'11\"", origin: 'Kingston, Jamaica', bio: 'A versatile defender who turns every dig into offense.' },
      { name: 'Noel James', age: 22, height: "5'9\"", origin: 'Ocho Rios, Jamaica', bio: 'A creative wing player with sharp court instincts.' },
    ],
  },
  {
    name: 'Kingston College',
    gender: 'boys',
    colors: ['#112b61', '#f7d948'],
    slogan: 'Precision, rhythm, and championship pedigree.',
    rating: 97,
    roster: [
      { name: 'Colin Grant', age: 23, height: "6'2\"", origin: 'Kingston, Jamaica', bio: 'A smooth attacker who finds gaps with precise timing.' },
      { name: 'Omar Smith', age: 22, height: "6'1\"", origin: 'Saint Andrew, Jamaica', bio: 'A reliable passer and quick transition leader.' },
      { name: 'Trey Morgan', age: 24, height: "6'4\"", origin: 'Kingston, Jamaica', bio: 'An imposing middle blocker who dominates the net.' },
      { name: 'Aaron Clarke', age: 21, height: "5'11\"", origin: 'Spanish Town, Jamaica', bio: 'A rapid setter who keeps the offense flowing under pressure.' },
      { name: 'Dwayne Powell', age: 25, height: "5'10\"", origin: 'Portmore, Jamaica', bio: 'A clutch finisher with smart shot selection.' },
      { name: 'Jalen Brown', age: 22, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A tenacious defender who ignites every rally.' },
    ],
  },
  {
    name: 'Calabar High',
    gender: 'boys',
    colors: ['#0357a6', '#84c7ff'],
    slogan: 'Speed-first offense and elite net pressure.',
    rating: 96,
    roster: [
      { name: 'Sean Miller', age: 22, height: "6'1\"", origin: 'Kingston, Jamaica', bio: 'Lightning-quick on serve receive and finishing attacks.' },
      { name: 'Nathaniel Wright', age: 23, height: "6'3\"", origin: 'Saint Andrew, Jamaica', bio: 'A dominating middle who closes blocks with accuracy.' },
      { name: 'Kyle Anderson', age: 21, height: "5'11\"", origin: 'Spanish Town, Jamaica', bio: 'A crafty setter who reads the defense early.' },
      { name: 'Levi Thomas', age: 24, height: "6'0\"", origin: 'Portmore, Jamaica', bio: 'A relentless defender who makes the hard saves look easy.' },
      { name: 'Isaiah Green', age: 22, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A powerful attacker with explosive jump serve pace.' },
      { name: 'Marcus Reid', age: 23, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A supportive wing who links offense and defense on every play.' },
    ],
  },
  {
    name: 'St. Jago High School',
    gender: 'both',
    colors: ['#e14428', '#ffd18d'],
    slogan: 'Vigour, precision, and late-match resolve.',
    rating: 95,
    roster: [
      { name: 'Taydra Williams', age: 22, height: "6'1\"", origin: 'Spanish Town, Jamaica', bio: 'A quick outside hitter with strong net finishes.' },
      { name: 'Denzel Thompson', age: 23, height: "6'3\"", origin: 'St. Catherine, Jamaica', bio: 'A physical blocker who changes the opponent’s tempo.' },
      { name: 'Keon Harrison', age: 21, height: "5'11\"", origin: 'Spanish Town, Jamaica', bio: 'A smart setter who keeps the offense unpredictable.' },
      { name: 'Nico Lewis', age: 24, height: "6'0\"", origin: 'Clarendon, Jamaica', bio: 'A disciplined libero with excellent coverage.' },
      { name: 'Korey Bailey', age: 22, height: "5'10\"", origin: 'St. Catherine, Jamaica', bio: 'A strong finisher with excellent timing.' },
      { name: 'Malcolm Reid', age: 23, height: "5'9\"", origin: 'St. Catherine, Jamaica', bio: 'A steady passer who keeps the rally alive.' },
    ],
  },
  {
    name: 'Cornwall College',
    gender: 'boys',
    colors: ['#0e4d2b', '#b2f0b2'],
    slogan: 'Western Jamaica strength and steady attack.',
    rating: 93,
    roster: [
      { name: 'Andre Campbell', age: 23, height: "6'2\"", origin: 'Montego Bay, Jamaica', bio: 'A hard-hitting attacker who punishes weak serves.' },
      { name: 'Dwayne Henry', age: 22, height: "6'3\"", origin: 'St. James, Jamaica', bio: 'A dominant middle blocker with solid hands.' },
      { name: 'Jason Thomas', age: 24, height: "6'1\"", origin: 'St. James, Jamaica', bio: 'A creative setter who excels in transition.' },
      { name: 'Shaun Bailey', age: 21, height: "5'10\"", origin: 'Westmoreland, Jamaica', bio: 'A tenacious defender with quick reactions.' },
      { name: 'Marvin Francis', age: 25, height: "6'0\"", origin: 'St. James, Jamaica', bio: 'A consistent finisher with strong court instincts.' },
      { name: 'Nathan Gordon', age: 22, height: "5'9\"", origin: 'St. James, Jamaica', bio: 'A reliable libero who keeps rallies alive.' },
    ],
  },
  {
    name: 'Clarendon College',
    gender: 'boys',
    colors: ['#8c2f17', '#ffb979'],
    slogan: 'Rural grit and smart court leadership.',
    rating: 91,
    roster: [
      { name: 'Rico Blake', age: 23, height: "6'1\"", origin: 'Clarendon, Jamaica', bio: 'A balanced attacker with strong footwork.' },
      { name: 'Kemar Johnson', age: 22, height: "6'3\"", origin: 'Clarendon, Jamaica', bio: 'An intimidating blocker with excellent timing.' },
      { name: 'Shawn Brown', age: 21, height: "5'11\"", origin: 'Clarendon, Jamaica', bio: 'A precise setter who manages the offense calmly.' },
      { name: 'Deandre Wilson', age: 24, height: "6'0\"", origin: 'Clarendon, Jamaica', bio: 'A durable defender who never yields ground.' },
      { name: 'Kade Nelson', age: 22, height: "5'10\"", origin: 'Clarendon, Jamaica', bio: 'A strong server who keeps opponents guessing.' },
      { name: 'Leon Fraser', age: 20, height: "5'9\"", origin: 'Clarendon, Jamaica', bio: 'A smart passer with crisp coverage.' },
    ],
  },
  {
    name: 'Excelsior High School',
    gender: 'boys',
    colors: ['#ff9a63', '#3b1b42'],
    slogan: 'Balanced speed and fierce fundamentals.',
    rating: 89,
    roster: [
      { name: 'Damian Ellis', age: 23, height: "6'0\"", origin: 'Kingston, Jamaica', bio: 'A thoughtful attacker who uses placement over power.' },
      { name: 'Taylen Scott', age: 22, height: "6'1\"", origin: 'St. Andrew, Jamaica', bio: 'A go-to setter with crisp timing and feeds.' },
      { name: 'Nate Brown', age: 24, height: "6'2\"", origin: 'St. Andrew, Jamaica', bio: 'A solid net defender who clamps the attack line.' },
      { name: 'Jadon Wilson', age: 21, height: "5'11\"", origin: 'Kingston, Jamaica', bio: 'A quick defender who transitions rapidly to offense.' },
      { name: 'Rasheed Thompson', age: 22, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A powerful server that forces poor returns.' },
      { name: 'Kendall White', age: 20, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A smart court general who keeps the team coordinated.' },
    ],
  },
  {
    name: 'Frome Technical High School',
    gender: 'boys',
    colors: ['#2b4f72', '#9cc3ff'],
    slogan: 'Technical precision with athletic tempo.',
    rating: 84,
    roster: [
      { name: 'Julian Clarke', age: 22, height: "6'1\"", origin: 'Westmoreland, Jamaica', bio: 'A precise hitter with a sharp serve.' },
      { name: 'Marcus Allen', age: 21, height: "6'2\"", origin: 'Westmoreland, Jamaica', bio: 'A disciplined blocker with quick reads.' },
      { name: 'Rohan Lewis', age: 23, height: "5'11\"", origin: 'Westmoreland, Jamaica', bio: 'A cerebral setter who keeps the offense clean.' },
      { name: 'Tariq Grant', age: 24, height: "6'0\"", origin: 'Westmoreland, Jamaica', bio: 'A tough defender who thrives in long rallies.' },
      { name: 'Nate Wilson', age: 22, height: "5'10\"", origin: 'Westmoreland, Jamaica', bio: 'A strong finisher with excellent court sense.' },
      { name: 'Caleb Harris', age: 20, height: "5'9\"", origin: 'Westmoreland, Jamaica', bio: 'A reliable passer who keeps every play alive.' },
    ],
  },
  {
    name: 'Herbert Morrison Technical High School',
    gender: 'boys',
    colors: ['#673d1b', '#ffcf93'],
    slogan: 'Built on discipline, powered by speed.',
    rating: 86,
    roster: [
      { name: 'Keenan Rose', age: 23, height: "6'0\"", origin: 'Kingston, Jamaica', bio: 'A strong server with smart placement.' },
      { name: 'Jalen Morgan', age: 22, height: "6'2\"", origin: 'Kingston, Jamaica', bio: 'A steady middle blocker with keen timing.' },
      { name: 'Ryan Clarke', age: 21, height: "5'11\"", origin: 'Kingston, Jamaica', bio: 'A creative setter who keeps the offense unpredictable.' },
      { name: 'Dwayne Carter', age: 24, height: "6'0\"", origin: 'Kingston, Jamaica', bio: 'A gritty defender who makes the difficult saves.' },
      { name: 'Shaun Williams', age: 22, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A reliable outside hitter with crisp technique.' },
      { name: 'Joel Davis', age: 20, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A calm libero who keeps every rally moving.' },
    ],
  },
  {
    name: 'Bridgeport High School',
    gender: 'boys',
    colors: ['#226846', '#b5ffda'],
    slogan: 'Strong fundamentals and relentless defense.',
    rating: 82,
    roster: [
      { name: 'Tyrone Green', age: 22, height: "6'1\"", origin: 'Manchester, Jamaica', bio: 'A tough attacker who battles for every point.' },
      { name: 'Jahmar Lewis', age: 21, height: "6'2\"", origin: 'Manchester, Jamaica', bio: 'A solid blocker who shuts down cross-court shots.' },
      { name: 'Darren Brown', age: 23, height: "5'11\"", origin: 'Manchester, Jamaica', bio: 'A precise setter with strong rhythm.' },
      { name: 'Leroy Brown', age: 24, height: "6'0\"", origin: 'Manchester, Jamaica', bio: 'A resilient defender who thrives in long rallies.' },
      { name: 'Keon Walker', age: 22, height: "5'10\"", origin: 'Manchester, Jamaica', bio: 'A skilled finisher with a fiery serve.' },
      { name: 'Ryan Grant', age: 20, height: "5'9\"", origin: 'Manchester, Jamaica', bio: 'A dependable passer who sets the team up cleanly.' },
    ],
  },
  {
    name: 'Edwin Allen High School',
    gender: 'girls',
    colors: ['#9c1b7c', '#f6c4ff'],
    slogan: 'Track royalty with championship poise.',
    rating: 98,
    roster: [
      { name: 'Tiana Evans', age: 19, height: "5'11\"", origin: 'Kingston, Jamaica', bio: 'A powerful outside hitter with elite movement.' },
      { name: 'Shanice Williams', age: 20, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A quick setter who controls the offense with precision.' },
      { name: 'Aaliyah Brown', age: 21, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A dominant blocker with great timing.' },
      { name: 'Megan Clarke', age: 18, height: "5'8\"", origin: 'Kingston, Jamaica', bio: 'A fierce defender who never lets the ball drop.' },
      { name: 'Janice Campbell', age: 20, height: "5'7\"", origin: 'Spanish Town, Jamaica', bio: 'A strong server who forces bad returns.' },
      { name: 'Nia Reid', age: 19, height: "5'6\"", origin: 'Kingston, Jamaica', bio: 'A reliable libero with excellent reads.' },
    ],
  },
  {
    name: 'Holmwood Technical High School',
    gender: 'girls',
    colors: ['#1f5a8a', '#94c8ff'],
    slogan: 'Hard-earned intensity and relentless coverage.',
    rating: 96,
    roster: [
      { name: 'Chanelle Grace', age: 20, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A tenacious attacker with fast-court footwork.' },
      { name: 'Tia Brown', age: 19, height: "5'11\"", origin: 'St. Andrew, Jamaica', bio: 'An aggressive blocker who reads sets early.' },
      { name: 'Rhea Williams', age: 21, height: "5'8\"", origin: 'Kingston, Jamaica', bio: 'A sharp server with strong placement control.' },
      { name: 'Sienna Morgan', age: 22, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A high-energy defender who covers the backcourt well.' },
      { name: 'Nadia Reid', age: 20, height: "5'7\"", origin: 'Kingston, Jamaica', bio: 'A quick setter with excellent ball rhythm.' },
      { name: 'Jade Thompson', age: 19, height: "5'8\"", origin: 'St. Andrew, Jamaica', bio: 'A reliable passer who keeps the offense moving.' },
    ],
  },
  {
    name: 'Hydel High School',
    gender: 'girls',
    colors: ['#ffb229', '#743e11'],
    slogan: 'Electric speed and championship attitude.',
    rating: 94,
    roster: [
      { name: 'Mia Beckford', age: 19, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A lightning-quick attacker with strong placement.' },
      { name: 'Tania Shaw', age: 20, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A creative setter who controls the game tempo.' },
      { name: 'Simone Foster', age: 21, height: "5'11\"", origin: 'Kingston, Jamaica', bio: 'A dominant blocker who challenges every spike.' },
      { name: 'Nadine Lewis', age: 18, height: "5'8\"", origin: 'Kingston, Jamaica', bio: 'A scrappy defender with excellent coverage.' },
      { name: 'Danielle James', age: 20, height: "5'7\"", origin: 'Kingston, Jamaica', bio: 'A focused server with clean technique.' },
      { name: 'Arielle Thomas', age: 19, height: "5'6\"", origin: 'Kingston, Jamaica', bio: 'A dependable libero who anchors the backline.' },
    ],
  },
  {
    name: 'St. Catherine High School',
    gender: 'girls',
    colors: ['#4b2a63', '#f2cdf0'],
    slogan: 'Steady craft and sustained intensity.',
    rating: 92,
    roster: [
      { name: 'Leah Chambers', age: 20, height: "5'9\"", origin: 'St. Catherine, Jamaica', bio: 'A sharp outside hitter with a strong serve.' },
      { name: 'Asha Reid', age: 21, height: "5'10\"", origin: 'St. Catherine, Jamaica', bio: 'A crafty setter who moves the ball with precision.' },
      { name: 'Keisha Grant', age: 19, height: "5'11\"", origin: 'St. Catherine, Jamaica', bio: 'A reliable blocker with good court sense.' },
      { name: 'Donna Williams', age: 22, height: "5'8\"", origin: 'St. Catherine, Jamaica', bio: 'A versatile defender with quick recovery.' },
      { name: 'Janice Clarke', age: 20, height: "5'7\"", origin: 'St. Catherine, Jamaica', bio: 'A precise server who disrupts rhythm.' },
      { name: 'Tricia Brown', age: 18, height: "5'6\"", origin: 'St. Catherine, Jamaica', bio: 'A dependable libero with strong instincts.' },
    ],
  },
  {
    name: 'St. Elizabeth Technical High School',
    gender: 'girls',
    colors: ['#3a5f4a', '#c5f0dc'],
    slogan: 'Rural power and disciplined teamwork.',
    rating: 90,
    roster: [
      { name: 'Megan Clarke', age: 21, height: "5'10\"", origin: 'St. Elizabeth, Jamaica', bio: 'A strong attacker with disciplined movement.' },
      { name: 'Nicole Brown', age: 20, height: "5'11\"", origin: 'St. Elizabeth, Jamaica', bio: 'A powerful middle blocker with great timing.' },
      { name: 'Amaya Miller', age: 19, height: "5'9\"", origin: 'St. Elizabeth, Jamaica', bio: 'A reliable setter who runs a clean offense.' },
      { name: 'Kiera Thompson', age: 22, height: "5'8\"", origin: 'St. Elizabeth, Jamaica', bio: 'A solid defender who takes smart risks.' },
      { name: 'Sasha Davis', age: 20, height: "5'7\"", origin: 'St. Elizabeth, Jamaica', bio: 'A strong server who opens the court well.' },
      { name: 'Lorna Johnson', age: 18, height: "5'6\"", origin: 'St. Elizabeth, Jamaica', bio: 'A determined libero with quick hands.' },
    ],
  },
  {
    name: 'Ardenne High School',
    gender: 'both',
    colors: ['#bb5275', '#ffc9df'],
    slogan: 'Modern speed and polished precision.',
    rating: 86,
    roster: [
      { name: 'Arielle Bennett', age: 20, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A fierce attacker with strong floor coverage.' },
      { name: 'Mia Chambers', age: 19, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A fast setter with excellent rhythm.' },
      { name: 'Jasmine Grant', age: 21, height: "5'11\"", origin: 'Kingston, Jamaica', bio: 'A steady blocker who controls the net.' },
      { name: 'Kyle Thomas', age: 22, height: "5'8\"", origin: 'Kingston, Jamaica', bio: 'A versatile defender who covers the backcourt.' },
      { name: 'Leah Brown', age: 20, height: "5'7\"", origin: 'Kingston, Jamaica', bio: 'A sharp server with smart placement.' },
      { name: 'Kevar Lewis', age: 18, height: "5'6\"", origin: 'Kingston, Jamaica', bio: 'A calm libero with strong fundamentals.' },
    ],
  },
  {
    name: 'Vere Technical High School',
    gender: 'girls',
    colors: ['#4da48f', '#b7fff0'],
    slogan: 'World-class speed meets court intelligence.',
    rating: 94,
    roster: [
      { name: 'Arianna Brown', age: 21, height: "5'10\"", origin: 'Clarendon, Jamaica', bio: 'A fast attacker with great shot selection.' },
      { name: 'Tashana Smith', age: 20, height: "5'11\"", origin: 'Clarendon, Jamaica', bio: 'A strong blocker with sharp anticipation.' },
      { name: 'Bria Hall', age: 22, height: "5'9\"", origin: 'Clarendon, Jamaica', bio: 'A precise setter who creates efficient offense.' },
      { name: 'Mya Taylor', age: 19, height: "5'8\"", origin: 'Clarendon, Jamaica', bio: 'A smart defender who reads the game early.' },
      { name: 'Natasha Clarke', age: 20, height: "5'7\"", origin: 'Clarendon, Jamaica', bio: 'A strong server with powerful placement.' },
      { name: 'Tiana James', age: 18, height: "5'6\"", origin: 'Clarendon, Jamaica', bio: 'A steady libero who handles tough deliveries.' },
    ],
  },
  {
    name: 'Green Pond High School',
    gender: 'girls',
    colors: ['#3b7a44', '#c7ffd2'],
    slogan: 'Quiet strength and precise timing.',
    rating: 78,
    roster: [
      { name: 'Morgan Reid', age: 19, height: "5'8\"", origin: 'Trelawny, Jamaica', bio: 'A disciplined attacker with great court sense.' },
      { name: 'Jade Morrison', age: 20, height: "5'9\"", origin: 'Trelawny, Jamaica', bio: 'A clever setter who controls tempo.' },
      { name: 'Chloe Davis', age: 21, height: "5'10\"", origin: 'Trelawny, Jamaica', bio: 'A steady blocker with strong focus.' },
      { name: 'Samantha Richards', age: 22, height: "5'7\"", origin: 'Trelawny, Jamaica', bio: 'A reliable defender with quick reads.' },
      { name: 'Erica Brown', age: 20, height: "5'6\"", origin: 'Trelawny, Jamaica', bio: 'A consistent server with good control.' },
      { name: 'Naomi Kelly', age: 18, height: "5'5\"", origin: 'Trelawny, Jamaica', bio: 'A composed libero who keeps rallies steady.' },
    ],
  },
  {
    name: 'Happy Grove High School',
    gender: 'girls',
    colors: ['#ff6fa8', '#ffe4f0'],
    slogan: 'Positive momentum and steady control.',
    rating: 80,
    roster: [
      { name: 'Sophie Clarke', age: 20, height: "5'8\"", origin: 'St. Mary, Jamaica', bio: 'A quick attacker with a bright court presence.' },
      { name: 'Nia Grant', age: 19, height: "5'9\"", origin: 'St. Mary, Jamaica', bio: 'A composed setter who keeps the offense smooth.' },
      { name: 'Leah Francis', age: 21, height: "5'10\"", origin: 'St. Mary, Jamaica', bio: 'A reliable blocker with good timing.' },
      { name: 'Tanya White', age: 22, height: "5'7\"", origin: 'St. Mary, Jamaica', bio: 'A keen defender who recovers quickly.' },
      { name: 'Amber Powell', age: 20, height: "5'6\"", origin: 'St. Mary, Jamaica', bio: 'A smart server who disrupts opponents.' },
      { name: 'Lisa Brown', age: 18, height: "5'5\"", origin: 'St. Mary, Jamaica', bio: 'A steady libero with reliable passing.' },
    ],
  },
  {
    name: 'Lacovia High School',
    gender: 'girls',
    colors: ['#62387f', '#e1c8ff'],
    slogan: 'Bold coverage and hard-earned points.',
    rating: 76,
    roster: [
      { name: 'Tiffany White', age: 20, height: "5'9\"", origin: 'St. Elizabeth, Jamaica', bio: 'A strong attacker with solid technique.' },
      { name: 'Alicia Thompson', age: 19, height: "5'10\"", origin: 'St. Elizabeth, Jamaica', bio: 'A composed setter who leads calmly.' },
      { name: 'Vanessa Grant', age: 21, height: "5'11\"", origin: 'St. Elizabeth, Jamaica', bio: 'A resilient blocker who competes at the net.' },
      { name: 'Janelle Brown', age: 22, height: "5'8\"", origin: 'St. Elizabeth, Jamaica', bio: 'A gritty defender who makes key saves.' },
      { name: 'Rebekah James', age: 20, height: "5'7\"", origin: 'St. Elizabeth, Jamaica', bio: 'A tidy server with reliable placement.' },
      { name: 'Shanice Kelly', age: 18, height: "5'6\"", origin: 'St. Elizabeth, Jamaica', bio: 'A dependable libero with strong fundamentals.' },
    ],
  },
  {
    name: 'Meadowbrook High School',
    gender: 'girls',
    colors: ['#c46f3d', '#ffdfb8'],
    slogan: 'Determined offense and thoughtful defense.',
    rating: 74,
    roster: [
      { name: 'Jade Thompson', age: 20, height: "5'8\"", origin: 'St. James, Jamaica', bio: 'A consistent attacker with smooth timing.' },
      { name: 'Briana Lewis', age: 19, height: "5'9\"", origin: 'St. James, Jamaica', bio: 'A smart setter who reads blockers well.' },
      { name: 'Kayla Brown', age: 21, height: "5'10\"", origin: 'St. James, Jamaica', bio: 'A steady blocker with a calm presence.' },
      { name: 'Leah Morgan', age: 22, height: "5'7\"", origin: 'St. James, Jamaica', bio: 'A resilient defender who battles for every rally.' },
      { name: 'Kristen Grant', age: 20, height: "5'6\"", origin: 'St. James, Jamaica', bio: 'A precise server with a tactical edge.' },
      { name: 'Paige Williams', age: 18, height: "5'5\"", origin: 'St. James, Jamaica', bio: 'A focused libero who anchors the backcourt.' },
    ],
  },
  {
    name: 'Paul Bogle High School',
    gender: 'girls',
    colors: ['#4f3a00', '#ffe1a1'],
    slogan: 'Resilient spirit and dynamic unity.',
    rating: 72,
    roster: [
      { name: 'Ariana Brown', age: 20, height: "5'9\"", origin: 'St. Thomas, Jamaica', bio: 'A strong attacker with determination.' },
      { name: 'Celia Thomas', age: 19, height: "5'10\"", origin: 'St. Thomas, Jamaica', bio: 'A smart setter with steady distribution.' },
      { name: 'Delia Clarke', age: 21, height: "5'11\"", origin: 'St. Thomas, Jamaica', bio: 'A hardworking blocker who contests every play.' },
      { name: 'Nicole Grant', age: 22, height: "5'8\"", origin: 'St. Thomas, Jamaica', bio: 'A committed defender with great heart.' },
      { name: 'Amber Lewis', age: 20, height: "5'7\"", origin: 'St. Thomas, Jamaica', bio: 'A precise server who builds momentum.' },
      { name: 'Yvonne Davis', age: 18, height: "5'6\"", origin: 'St. Thomas, Jamaica', bio: 'A reliable libero with solid fundamentals.' },
    ],
  },
  {
    name: 'Seaforth High School',
    gender: 'girls',
    colors: ['#007bbf', '#a8e4ff'],
    slogan: 'Island grit and dynamic rallies.',
    rating: 82,
    roster: [
      { name: 'Janelle Brown', age: 20, height: "5'9\"", origin: 'St. Thomas, Jamaica', bio: 'A balanced attacker with quick bursts.' },
      { name: 'Tessa Wilson', age: 19, height: "5'10\"", origin: 'St. Thomas, Jamaica', bio: 'A smart setter who reads the opposition.' },
      { name: 'Keisha Grant', age: 21, height: "5'11\"", origin: 'St. Thomas, Jamaica', bio: 'A strong blocker with disciplined timing.' },
      { name: 'Maya Thomas', age: 22, height: "5'8\"", origin: 'St. Thomas, Jamaica', bio: 'A gritty defender who shuts down rallies.' },
      { name: 'Sandra Lewis', age: 20, height: "5'7\"", origin: 'St. Thomas, Jamaica', bio: 'A sharp server with excellent placement.' },
      { name: 'Nadine Peters', age: 18, height: "5'6\"", origin: 'St. Thomas, Jamaica', bio: 'A dedicated libero with great anticipation.' },
    ],
  },
  {
    name: 'Tivoli Gardens High School',
    gender: 'girls',
    colors: ['#5f2233', '#ffbdca'],
    slogan: 'Street-smart grit with explosive offense.',
    rating: 88,
    roster: [
      { name: 'Shawna Lewis', age: 20, height: "5'9\"", origin: 'Kingston, Jamaica', bio: 'A fearless attacker who thrives under pressure.' },
      { name: 'Nadia Clarke', age: 19, height: "5'10\"", origin: 'Kingston, Jamaica', bio: 'A clever setter with sharp decision-making.' },
      { name: 'Tashana Grant', age: 21, height: "5'11\"", origin: 'Kingston, Jamaica', bio: 'A reliable blocker who reads the court well.' },
      { name: 'Chantel Brown', age: 22, height: "5'8\"", origin: 'Kingston, Jamaica', bio: 'A tough defender who never gives up on a ball.' },
      { name: 'Denise Williams', age: 20, height: "5'7\"", origin: 'Kingston, Jamaica', bio: 'A precise server who forces weak returns.' },
      { name: 'Nicole Reid', age: 18, height: "5'6\"", origin: 'Kingston, Jamaica', bio: 'A determined libero with steady passing.' },
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
