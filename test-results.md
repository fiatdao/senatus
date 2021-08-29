# Test results

```shell
  Governance
    General tests
      ✓ should be deployed
      ✓ is able to receive ethers (60ms)
    activate
      ✓ reverts if threshold not yet met (47ms)
      ✓ activates if threshold is met (65ms)
      ✓ reverts if already activated (68ms)
    propose
      ✓ create new proposal revert reasons (385ms)
      ✓ create new proposal (246ms)
      ✓ start vote && quorum (172ms)
      ✓ cast, cancel and change vote (430ms)
      ✓ castVote fails if user does not have voting power (101ms)
      ✓ cannot vote when vote is closed (192ms)
      ✓ verify proposal state (473ms)
      ✓ cannot execute proposals that are not queued (129ms)
      ✓ test proposal execution in queued mode (292ms)
      ✓ cannot cancel expired, failed or executed proposals (413ms)
      ✓ fail for invalid quorum (161ms)
      ✓ fail for invalid minimum threshold (334ms)
      ✓ test change periods (402ms)
      ✓ proposer cancel proposal (111ms)
      ✓ allows anyone to cancel a proposal if creator balance fell below threshold (149ms)
      ✓ allows cancellation only when proposal is in warmup or active state (349ms)
      ✓ test proposal with only value transfer (248ms)
    abrogation proposal
      ✓ reverts if proposal id is not valid
      ✓ works only if proposal is in queued state (531ms)
      ✓ fails if user does not voting power above threshold (250ms)
      voting
        ✓ reverts for invalid proposal id
        ✓ reverts if abrogation proposal is not created (97ms)
        ✓ reverts if abrogation proposal expired (263ms)
        ✓ reverts if user does not have voting power (250ms)
        ✓ reverts if user tries to double vote (259ms)
        ✓ updates the amount of votes (291ms)
        ✓ allows user to change vote (295ms)
        ✓ changes initial proposal state to cancelled if accepted (358ms)
        ✓ does not change initial proposal state if not accepted (326ms)
      cancel vote
        ✓ reverts if abrogation proposal is not created (93ms)
        ✓ reverts if abrogation proposal expired (235ms)
        ✓ reverts if user tries to cancel vote if not voted (234ms)
        ✓ allows users to cancel their votes (293ms)
      abrogateProposal
        ✓ reverts if proposal state is not canceled (92ms)
        ✓ reverts if abrogate proposal failed (304ms)
        ✓ works if abrogation proposal was accepted (348ms)
    stored parameters
      ✓ stores parameters on proposal on creation (127ms)
      ✓ parameters changed mid-flight do not affect running proposals (653ms)


  43 passing (12s)

-----------------------|----------|----------|----------|----------|----------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------------|----------|----------|----------|----------|----------------|
 contracts/            |    95.31 |    84.06 |    92.11 |    95.33 |                |
  Bridge.sol           |      100 |       75 |      100 |      100 |                |
  Governance.sol       |    94.54 |    85.34 |    88.89 |    94.54 |... 463,472,473 |
  Parameters.sol       |      100 |    78.57 |      100 |      100 |                |
 contracts/interfaces/ |      100 |      100 |      100 |      100 |                |
  IKernel.sol            |      100 |      100 |      100 |      100 |                |
  IBridge.sol          |      100 |      100 |      100 |      100 |                |
-----------------------|----------|----------|----------|----------|----------------|
All files              |    95.31 |    84.06 |    92.11 |    95.33 |                |
-----------------------|----------|----------|----------|----------|----------------|
```
