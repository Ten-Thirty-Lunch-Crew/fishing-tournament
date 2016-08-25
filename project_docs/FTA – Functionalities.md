# FTA – Functionalities
## Create User
- Enter Name
- Phone number

## Create Participant
- Link user to a tourney

## Create Tourney Instance
- Tourney Name
- Tourney Dates
- Tourney Rules – wysiwyg?
- Configurations
	- Measurements (length/weight) (Choose 1 for now – later maybe have both)
	- Min measurement (should be listed in rules)
	- Max measurement
## Ability to Enter a Catch
- Based on tourney config
	- Enter weight/length
	- Must be associated to a tourney/user in that tourney
- Navigation from tourney page – allows for weigh-in entry
	- User entry (main path)
	- Chooses tourney (for now – only 1 active tourney at a time)
	- Must be in bounds of active tourney for entry to be available
	- Enters measurement (required)
	- Enter a twitter/instagram image URL (optional)
	- Enter a comment (optional)
## Leaderboard
- List all participants in order of configured metric
- Biggest catch
- Sorting (by: summary, individual catches, date range)
	- This part is MVP+ (maybe not required for 1.0 release but adds value)
