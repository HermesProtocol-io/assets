# Governance Tracking

**Hermes Protocol** allows users to submit to alerts for new Governance Polls. Not just for Polls of the chain itself, but also for different projects/dApps/DAO's that use on-chain governance to decide how their project should evolve.

### Poll Interpretation

In order for **Hermes Protocol** to properly interpret new governance proposals for your project, we need to understand how to parse the data.

This template allows us to do exactly that:

```json
{
    "smartContractAddress": {
        "name": "",
        "icon": "",             // optional if you want the logo to be shown with the alerts
        "trigger": {            // Based on the "event logs" section of the TX
            "type": "",         // Which log index should we look into? eg.: 'execute', 'message', 'wasm', etc.;
            "key": "",          // The key within the event logs (left side of the table, if looking at Terrascope)
            "value": ""         // The value that we should find (for the respective key); eg.: 'submit_proposal', 'liquidate', etc.;
        },
        "fixed_config_obj": {   // optional if the smart contract's 'config' query below already has this info
            "req_token": {
                "address": "token address",
                "ammount": "required deposit ammount"
            },
            "expiration": "expiration period",
            "quorum": "required quorum percentage",
            "threshold": "required threshold percentage"
        },
        "config_query_obj": {   // optional if this JSON already has a fixed 'config' object defined above
            "req_token": {
                "address": "variable key",
                "ammount": "variable key"
            },
            "expiration": "variable key",
            "quorum": "variable key",
            "threshold": "variable key"
        },
        "url": "",              // optional if every create poll object already has the URL
        "base64_objs": [],
        "poll_obj": {
            "title": "",
            "description": "",
            "end_block": "",    // optional if there is an 'end_time' instead, or there's an expiration time defined on the configs above.
            "end_time": "",     // optional if there is an 'end_block' instead, or there's an expiration time defined on the configs above.
            "url": "",          // optional if it's fixed via this JSON (above boolean 'base64_msg')
            "extras": [         // optional, should the governance polls have extra info that they'd like to show to users.
                 {
                    "key": "variable key",
                    "name": "Key Display Name"
                 }
            ]
        }
    }
}
```

**Some notes**:

- Some fields are optional if there's an alternative one, but it's still mandatory to have one of them. Example: 'fixed_config_obj' and 'config_query_obj';
- Make sure you read every comment and take a look at some of the objects already made/submitted;
- This is ideally submitted by a developer/engineer, but if you require assistance, get in touch with us through our Discord and we'll help you out;

### Projects

| Project   | Submitted | Governance                                         | Live   |
|-----------|-----------|---------------------------------------------------|--------|
| Astroport | [✅ open sub.](https://github.com/HermesProtocol-io/assets/blob/main/static/blockchains/terra/governance/projects.json#L2)        | [Gov. Page](https://app.astroport.fi/governance)  | ⏳    |
