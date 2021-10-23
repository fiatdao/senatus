```shell script
  Governance
    General tests
      ✓ should be deployed
      ✓ is able to receive ethers (53ms)
    activate
      ✓ reverts if threshold not yet met (82ms)
      ✓ activates if threshold is met (58ms)
      ✓ reverts if already activated (55ms)
    propose
      ✓ create new proposal revert reasons (336ms)
      ✓ create new proposal (216ms)
      ✓ start vote && quorum (152ms)
      ✓ cast, cancel and change vote (386ms)
      ✓ castVote fails if user does not have voting power (84ms)
      ✓ cannot vote when vote is closed (169ms)
      ✓ verify proposal state (436ms)
      ✓ cannot execute proposals that are not queued (105ms)
      ✓ test proposal execution in queued mode (277ms)
      ✓ cannot cancel expired, failed or executed proposals (396ms)
      ✓ fail for invalid quorum (154ms)
      ✓ fail for invalid minimum threshold (310ms)
      ✓ test change periods (376ms)
      ✓ proposer cancel proposal (106ms)
      ✓ allows anyone to cancel a proposal if creator balance fell below threshold (142ms)
      ✓ allows cancellation only when proposal is in warmup or active state (323ms)
      ✓ test proposal with only value transfer (238ms)
    abrogation proposal
      ✓ reverts if proposal id is not valid
      ✓ works only if proposal is in queued state (467ms)
      ✓ fails if user does not voting power above threshold (238ms)
      voting
        ✓ reverts for invalid proposal id
        ✓ reverts if abrogation proposal is not created (89ms)
        ✓ reverts if abrogation proposal expired (224ms)
        ✓ reverts if user does not have voting power (260ms)
        ✓ reverts if user tries to double vote (255ms)
        ✓ updates the amount of votes (280ms)
        ✓ allows user to change vote (296ms)
        ✓ changes initial proposal state to cancelled if accepted (348ms)
        ✓ does not change initial proposal state if not accepted (304ms)
      cancel vote
        ✓ reverts if abrogation proposal is not created (83ms)
        ✓ reverts if abrogation proposal expired (226ms)
        ✓ reverts if user tries to cancel vote if not voted (248ms)
        ✓ allows users to cancel their votes (287ms)
      abrogateProposal
        ✓ reverts if proposal state is not canceled (80ms)
        ✓ reverts if abrogate proposal failed (284ms)
        ✓ works if abrogation proposal was accepted (326ms)
    stored parameters
      ✓ stores parameters on proposal on creation (114ms)
      ✓ parameters changed mid-flight do not affect running proposals (597ms)


  43 passing (11s)

✨  Done in 15.58s.
```
