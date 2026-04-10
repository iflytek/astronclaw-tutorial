# Point System and Subscription

## 1. Rule Description
This rule applies to subscription plans, point acquisition, point usage, and billing mechanisms in the AstronClaw service.
AstronClaw uses **Points** as the unified billing unit to measure the user's:
*   Computing resource consumption
*   Large model calls
*   Skill capability calls
*   Agent task execution

## 2. Subscription Plans
AstronClaw provides different levels of subscription plans to meet the different needs of individual developers, AI enthusiasts, and professional users.

| Plan Version | Original Price | First Purchase Offer | Monthly Gift Points | Core Benefits |
| :--- | :--- | :--- | :--- | :--- |
| **Basic** | ¥168/month | ¥16.8/month (90% off first purchase) | 35,000 Points | One-click deploy AstronClaw, out-of-the-box Skills, standard task processing capability, supports point top-up |
| **Professional** | ¥568/month | ¥56.8/month (90% off first purchase) | 120,000 Points | One-click deploy AstronClaw, out-of-the-box Skills, priority processing during peak hours, supports point top-up, early access to new features |

> Subscription requires agreement to the "AstronClaw Subscription Edition Special Agreement"

## 3. Point Types
AstronClaw platform points are divided into three types, with different validity periods.

| Point Type | Validity Period | Description |
| :--- | :--- | :--- |
| **Member Points** | Valid for the current month | Gifted with subscription plan, cannot be accumulated to the next month |
| **Top-up Points** | Valid for 1 year from purchase | Points additionally purchased by the user |
| **Event Points** | Subject to event rules | Obtained by participating in official events |

**Description:**
*   Member points are **reset on a non-calendar month basis**
*   If membership is terminated, unused points will automatically expire

## 4. Point Acquisition
Users can obtain points in the following ways:

### 4.1 Plan Subscription
After subscribing to the Basic or Professional plan, points are **credited immediately**.

### 4.2 Point Top-up
Users can purchase point packages at any time to break through plan limits.

| Point Amount | Standard Price | Professional 10% Off |
| :--- | :--- | :--- |
| 1,000 Points | ¥10 | ¥9 |
| 5,000 Points | ¥50 | ¥45 |
| 10,000 Points | ¥100 | ¥90 |
| 20,000 Points | ¥200 | ¥180 |

### 4.3 Event Rewards
AstronClaw will occasionally launch events to reward points.

## 5. Point Consumption Rules
Points are the basic measurement unit for users to call various functions, execute tasks, and consume model resources within AstronClaw. The more complex the task, the more points it consumes.

To help users understand the approximate resource consumption of common tasks, we provide typical point consumption references based on different task types. Please note that the relevant references are for estimation purposes only. **The actual deducted points may vary depending on the task content, called capabilities, processing depth, execution time, and system operation status, and are ultimately subject to the actual settlement result of the task.**

Points will be consumed when executing tasks, and point consumption depends on:
*   Model calls
*   Skill capability calls
*   Agent task complexity
*   Token consumption

## 6. Model Point Consumption

| Model | Input Price | Output Price | Billing Unit |
| :--- | :--- | :--- | :--- |
| MiniMax-M2.5 | 2.1 RMB/Million Tokens | 8.4 RMB/Million Tokens | Tokens |
| Kimi-K2.5 | 4 RMB/Million Tokens | 21 RMB/Million Tokens | Tokens |
| GLM-5 | 6 RMB/Million Tokens | 22 RMB/Million Tokens | Tokens |
| Spark X2 | 3.7 RMB/Million Tokens | 9 RMB/Million Tokens | Tokens |

**Point Deduction Example:**
| Model | Input | Output |
| :--- | :--- | :--- |
| MiniMax-M2.5 | 2.1 Points / 10k Tokens | 8.4 Points / 10k Tokens |
| Kimi-K2.5 | 4 Points / 10k Tokens | 21 Points / 10k Tokens |
| GLM-5 | 6 Points / 10k Tokens | 22 Points / 10k Tokens |
| Spark X2 | 3.7 Points / 10k Tokens | 9 Points / 10k Tokens |

## 7. Skill Call Point Consumption (Example)
| Scenario | Skill | Point Consumption |
| :--- | :--- | :--- |
| Web Search | Aggregate Search | 6 Points/time |
| Daily Office | Invoice Recognition | 6 Points/time |
| Daily Office | Document Proofreading | 600 Points/time |
| Daily Office | Smart Resume Generation | 80 Points/time |
| Daily Office | Text Translation | 45 Points/time |
| AI Large Model | Image Understanding | 27 Points/time |
| Image Recognition | OCR | 3 Points/time |
| Speech Synthesis | Ultra-realistic Voice | 150 Points/10k chars |
| Speech Synthesis | One-sentence Voice Clone | 700 Points/time |

## 8. Free Skills and Templates
The following official templates are **free to use (0 points)**:
*   Industry Research Report Generation
*   Financial Investment Research Daily
*   Multi-Agent Investment Research Team
*   In-depth Industry Research Report
*   News Collection Report
*   Social Media Hit Analysis
*   Frontend Design Generation
*   Skill Creation Tool
*   Canvas Design Tool
*   Study Plan Generation

## 9. Point Deduction Order
The system deducts points in the following order:
1.  **Prioritize consuming** points that are about to expire

If expiration times are the same:
**Event Points → Member Points → Top-up Points**

## 10. Service Upgrade and Downgrade
### Upgrade
Users can upgrade their plan at any time:
*   New plan benefits **take effect immediately**
*   Remaining member points are converted proportionally

### Downgrade
Active downgrading is not currently supported.
It is recommended to resubscribe after the current plan expires.

## 11. Promotions and Benefits
AstronClaw will occasionally launch:
*   New user discounts
*   Point reward events
*   Holiday promotions

## 12. Point Refund Policy
### Abnormal Return
If the following situations occur during task execution:
*   System error
*   Service interruption
*   Review failure
The system will **automatically refund all points**.

### Non-refundable
Purchased: Plans, point packages
Withdrawal or transfer is not supported.

### Cheating Handling
If the following behaviors are found:
*   Using loopholes to farm points
*   Illegal API calls
The platform has the right to:
*   Clear points
*   Ban accounts

## 13. Frequently Asked Questions (FAQ)
**Q1: What if my monthly points run out?**
A: You can purchase point packages, renew early, or upgrade your plan.

**Q2: Which points does the system deduct first?**
A: The system prioritizes deducting points that are about to expire (usually member points).

**Q3: Can I use multiple plans at the same time?**
A: No. Each account can only subscribe to one plan.

**Q4: How can I check my point usage?**
A: You can check remaining points, point details, and purchase records on the point management page.
