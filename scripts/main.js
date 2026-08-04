const teams = [
  {
    name: 'Jamaica College',
    colors: ['#08c16f', '#f7d948'],
    style: 'champion',
    slogan: 'Aerial power meets precision strike.',
    rating: 98,
    roster: ['Zak Matthews', 'Kimo “Sky” Clarke', 'Nia Brown', 'Marlon Reid', 'Trey Ellis', 'Serena Powell'],
  },
  {
    name: 'Neon Raptors',
    colors: ['#81f4ff', '#1a2d5c'],
    slogan: 'Speed, spin, and a neon slide.',
    rating: 88,
    roster: ['Mika Torres', 'Cruz Vega', 'Jade Park', 'Ari Castillo', 'Xander Finch', 'Violet Hart'],
  },
  {
    name: 'Luna Strikers',
    colors: ['#c4b8ff', '#11224f'],
    slogan: 'Moonlit volleys and sonic runs.',
    rating: 84,
    roster: ['Lena Vu', 'Rico Salas', 'Talia Moon', 'Dante Stone', 'Maya Rivers', 'Jett Rhodes'],
  },
  {
    name: 'Silver Cobras',
    colors: ['#d6dde5', '#444444'],
    slogan: 'Slithering attacks with icy defense.',
    rating: 82,
    roster: ['Noah Kane', 'Asha Malik', 'Beck Ryder', 'Sienna Cole', 'Marcus Holt', 'Elise Penn'],
  },
  {
    name: 'Titan Rush',
    colors: ['#f2584b', '#1c1f4c'],
    slogan: 'Relentless charge with aerial dominance.',
    rating: 86,
    roster: ['Leo Banks', 'Zara Quinn', 'Hugo King', 'Raya Cruz', 'Dex Morgan', 'Lana Frost'],
  },
  {
    name: 'Harbor Hawks',
    colors: ['#6ce3ff', '#123f5e'],
    slogan: 'Seaside precision and high-flying blocks.',
    rating: 80,
    roster: ['Finn Brooks', 'Sofia Lane', 'Arlo Nash', 'Nina Cross', 'Owen Vale', 'Mira Dean'],
  },
  {
    name: 'Solar Surge',
    colors: ['#ffd67a', '#b45110'],
    slogan: 'Blazing attacks with electric tempo.',
    rating: 85,
    roster: ['Cass Bennett', 'Tyson Reid', 'Lani Moore', 'Keegan Tate', 'Juno Bell', 'Amara Grace'],
  },
  {
    name: 'Iron Waves',
    colors: ['#7dc5ff', '#0b1826'],
    slogan: 'Steel discipline and tidal energy.',
    rating: 83,
    roster: ['Maddox Vale', 'Noelle Hart', 'Jonas Pike', 'Ayla Reed', 'Sage Marlow', 'Derek Stone'],
  },
  {
    name: 'Metro Meteors',
    colors: ['#fbe96d', '#412f6a'],
    slogan: 'Urban bursts and explosive volleys.',
    rating: 79,
    roster: ['Cassian Park', 'Nova Lee', 'Reed Fox', 'Jade Norton', 'Kira Storm', 'Miles Vega'],
  },
  {
    name: 'Crimson Flames',
    colors: ['#ff5f6d', '#320706'],
    slogan: 'Inferno serves and blazing block lines.',
    rating: 81,
    roster: ['Niko Blaze', 'Tess Ashford', 'Rylan Fox', 'Zara Flame', 'Quinn Ellis', 'Paige North'],
  },
  {
    name: 'Aurora Vipers',
    colors: ['#64ffc2', '#0c2236'],
    slogan: 'Aurora speed with venomous defense.',
    rating: 77,
    roster: ['Isla Vale', 'Kade Rivers', 'Maddie Snow', 'Felix Storm', 'Rae Winters', 'Theo Pike'],
  },
  {
    name: 'Shadow Spartans',
    colors: ['#9177ff', '#10131c'],
    slogan: 'Dark streaks and unstoppable walls.',
    rating: 76,
    roster: ['Darius Voss', 'Lila Cross', 'Orion Hale', 'Eva Steel', 'Rand Mason', 'Nia Frost'],
  },
];

const teamGrid = document.getElementById('teamGrid');
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
let liveGuests = [
  'MayaFan',
  'VolleyVictor',
  'AerialAce',
  'CourtQueen',
  'SpikeSpectre',
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
    <div class="team-roster">
      ${team.roster.map(member => `<span>${member}</span>`).join('')}
    </div>
  `;
  return card;
}

function populateTeamLists() {
  teams.forEach((team, index) => {
    teamGrid.appendChild(createTeamCard(team));

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
  voteSummary.innerHTML = `
    <div class="progress-board">
      ${teams
        .slice(0, 6)
        .map(
          (team, idx) => `
            <div class="progress-row">
              <span class="progress-label">${team.name}</span>
              <div class="progress-bar"><div class="progress-fill" style="width:${Math.round((votes[idx] / total) * 100)}%"></div></div>
              <span>${votes[idx]} cheers</span>
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
  loginStatus.textContent = 'Not signed in';
  premiumStatus.textContent = 'Free trial active';
  streakDays = 0;
  streakCount.textContent = '0 days';
  premiumActive = false;
  appendChatMessage('assistant', 'You have signed out. Sign in again to keep your streak and premium access active.');
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
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const master = audioContext.createGain();
  master.gain.value = 0.25;
  master.connect(audioContext.destination);

  const tempo = 75;
  const intervalMs = (60 / tempo) * 1000;
  const noise = audioContext.createBufferSource();
  const bufferSize = audioContext.sampleRate * 2;
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.1;
  }
  noise.buffer = noiseBuffer;
  noise.loop = true;
  const noiseFilter = audioContext.createBiquadFilter();
  noiseFilter.type = 'lowpass';
  noiseFilter.frequency.value = 900;
  noise.connect(noiseFilter).connect(master);

  noise.start();

  const synth = audioContext.createOscillator();
  synth.type = 'triangle';
  synth.frequency.value = 220;
  const synthGain = audioContext.createGain();
  synthGain.gain.value = 0;
  synth.connect(synthGain).connect(master);
  synth.start();

  setInterval(() => {
    const now = audioContext.currentTime;
    const note = audioContext.createOscillator();
    note.type = 'sine';
    note.frequency.value = 160 + Math.floor(Math.random() * 4) * 20;
    const noteGain = audioContext.createGain();
    noteGain.gain.value = 0.08;
    note.connect(noteGain).connect(master);
    noteGain.gain.setValueAtTime(0.08, now);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    note.start(now);
    note.stop(now + 0.5);
  }, intervalMs * 2);

  isMusicPlaying = true;
  playLofiBtn.textContent = 'Lofi Atmosphere Active';
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
    if (!audioContext) {
      initAudio();
      return;
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
      playLofiBtn.textContent = 'Lofi Atmosphere Active';
    }
  });
  heroButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector(button.dataset.target).scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function init() {
  populateTeamLists();
  updateFavoriteCard();
  attachListeners();
  createVoteButtons();
  loadVoteSummary();
  loadStandings();
  predictTeamA.selectedIndex = 0;
  predictTeamB.selectedIndex = 1;
  simTeamA.selectedIndex = 0;
  simTeamB.selectedIndex = 1;
  showPrediction();
  appendChatMessage('assistant', 'Hello! I am your Volleystrike assistant. Ask about teams, matchups, fan momentum, or league stats.');
  appendLiveMessage('assistant', 'Live room ready. Chat with other fans when you sign in.');
}

init();
