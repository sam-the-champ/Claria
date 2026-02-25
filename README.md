#🚀 Frontend Productivity Decision Engine

 Claria is a rule-based diagnostic system designed to help frontend developers identify productivity blockers and receive structured, category-based recommendations.
This app uses a JSON-based decision engine, score accumulation, and category classification to evaluate users’ productivity challenges and generate actionable advice.

🎯 Purpose
Many frontend mentees struggle with:
Inconsistent coding habits
Skill gaps
Burnout
Lack of roadmap clarity
This system provides a structured self-diagnosis tool to help them identify their primary productivity issue and receive targeted guidance.

🧠 System Architecture
Tech Stack
Vanilla JavaScript
Firebase Authentication
Firebase Firestore
JSON-based decision engine

🌳 Decision Tree Structure
The system follows a structured diagnostic flow:
START

├── SECTION A: Execution Pattern
│   ├── Q1: How many days per week do you code?
│   │      ├── 5–7 → +0 CONSISTENCY
│   │      ├── 2–4 → +2 CONSISTENCY
│   │      └── 0–1 → +5 CONSISTENCY
│   │
│   ├── Q2: How many unfinished projects do you have?
│   │      ├── 0–1 → +0 CONSISTENCY
│   │      ├── 2–3 → +2 CONSISTENCY
│   │      └── 4+ → +4 CONSISTENCY
│   │
│   └── Q3: Do you follow a weekly learning schedule?
│          ├── Yes consistently → +0 CONSISTENCY
│          ├── Sometimes → +2 CONSISTENCY
│          └── No → +4 CONSISTENCY
│
├── SECTION B: Skill Depth
│   ├── Q4: Can you explain closures, async/await, and the DOM clearly?
│   │      ├── Yes confidently → +0 SKILL
│   │      ├── Partially → +2 SKILL
│   │      └── No → +5 SKILL
│   │
│   ├── Q5: Can you build a small app without watching a tutorial?
│   │      ├── Yes → +0 SKILL
│   │      ├── With minor help → +2 SKILL
│   │      └── No → +4 SKILL
│   │
│   └── Q6: When stuck, what do you do?
│          ├── Debug independently → +0 SKILL
│          ├── Google immediately → +2 SKILL
│          └── Abandon task → +4 SKILL
│
├── SECTION C: Mental State
│   ├── Q7: Do you feel overwhelmed by the number of frontend tools?
│   │      ├── No → +0 BURNOUT
│   │      ├── Sometimes → +2 BURNOUT
│   │      └── Constantly → +5 BURNOUT
│   │
│   ├── Q8: Do you compare your progress with others often?
│   │      ├── Rarely → +0 BURNOUT
│   │      ├── Sometimes → +2 BURNOUT
│   │      └── Daily → +4 BURNOUT
│   │
│   └── Q9: Do you feel mentally exhausted before coding?
│          ├── No → +0 BURNOUT
│          ├── Occasionally → +2 BURNOUT
│          └── Frequently → +5 BURNOUT
│
├── SECTION D: Direction & Strategy
│   ├── Q10: Do you have a clear 3-month roadmap?
│   │      ├── Yes → +0 DIRECTION
│   │      ├── Rough idea → +2 DIRECTION
│   │      └── No → +5 DIRECTION
│   │
│   ├── Q11: Are you focused on one stack?
│   │      ├── Yes → +0 DIRECTION
│   │      ├── 2 stacks → +2 DIRECTION
│   │      └── Jumping stacks → +4 DIRECTION
│   │
│   └── Q12: Do you know the job role you’re targeting?
│          ├── Yes clearly → +0 DIRECTION
│          ├── Not fully → +2 DIRECTION
│          └── No → +5 DIRECTION
│
END
📊 Scoring Model

Each answer assigns weighted points to one of four categories:
skill
consistency
burnout
direction
After all questions:
Scores are accumulated.
The category with the highest score is selected.
A structured recommendation is generated.

💾 Data Storage Structure
Users Collection
users/
  userId
    name
    email
Diagnoses Collection
diagnoses/
  diagnosisId
    userId
    scores
    resultCategory
    createdAt
🔍 Core Features
Secure authentication
JSON-driven question engine
Deterministic scoring logic
Category-based recommendations
Saved diagnosis history
Retake assessment option

🛠 Future Improvements
Weighted scoring refinement
Progress tracking over time
Mentor dashboard
AI-enhanced recommendations

This project is a structured decision-support system built specifically for frontend productivity diagnostics.
