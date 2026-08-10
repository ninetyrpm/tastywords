---
slug: trouble-not-found
plainTitle: Trouble Not Found
titleLines:
  - Trouble Not Found
subtitle: "On evidence, reputation, and the limits of observation"
eyebrow: Essay
signature: Ken
dateline: "Louisville, Kentucky · August 2026"
status: draft
publishedDate: ''
---

### CONTENT NOTE

This essay discusses sexual abuse and sexual misconduct, including the social response to allegations. It does **not** contain graphic descriptions or reenactments. However, please consider browsing my [other essays](https://tastywords.vercel.app) if you prefer not to engage with this topic.

---

### Failure to Fail

Engineers and service organizations have several phrases for a problem that a customer reports but nobody else can make happen.

Let's say your refrigerator is on the fritz, so you make an appointment with a technician. They arrive, tinker with the appliance, and frustratingly cannot seem to find anything wrong.

* Unable to replicate.
* Customer issue not duplicated.
* Trouble not found.

A customer says the machine shut itself off. We plug it in. It works.

They say it made a terrible noise. We run it for an hour. Nothing.

They say the handle broke in their hand, the motor stalled, the controls froze, or something smelled hot. We inspect the unit, cycle it dozens of times, measure whatever can be measured, and wait for the failure to present itself.

Sometimes it does. Sometimes it doesn't.

And when it doesn't, we have a problem that is almost philosophical.

The customer experienced something. We cannot reproduce it. What, exactly, do we know?

---

### If A Tree Falls...

Product development and troubleshooting tend to have an informal hierarchy of evidence.

* One complaint is an anecdote.
* Two similar complaints are interesting.
* Any more than that starts to become a recognizable pattern.

A returned unit with a visibly broken component is evidence. A video of a screen glitching is evidence. Reports of smoke and foul odor are also evidence. But a failure that an engineer can reproduce on command is better still.

Once you can make the problem happen, everyone relaxes a little. Not because the machine is safer. Quite the opposite. But the uncertainty is gone. Now there is something to point at.

* Here.
* Watch.
* Press this button.
* Wait three seconds.
* There it is.

The easiest problems to act upon are therefore not necessarily the most dangerous ones. They are the most **legible**.

A cosmetic defect can command an entire meeting because twelve people can stand around a table and look at it. But a potentially serious intermittent failure can linger for months because nobody can get the damn thing to happen again.

Good engineers don't simply dismiss reports they cannot reproduce. Particularly when the consequences might be severe, a single report can be enough to start asking questions. But institutions have an understandable appetite for reproducibility. Reproducibility turns uncertainty into something actionable. It gives everyone permission to believe. And, perhaps more importantly, permission to do something about it.

I experience this regularly as an engineer at FirstBuild.

Shortly after we launched the Arden Indoor Smoker—now sold as the [GE Profile Smart Indoor Smoker](https://www.geappliances.com/indoor-pellet-smoker)—we started getting service calls that made the engineering team nervous. Customers were reporting defective controls.

The exact descriptions varied. Some said the buttons weren't responding. Others said the display was frozen. The strange part was that the controls appeared to be doing something. The smoker beeped when people pressed buttons. In some cases, it would even start cooking. But the display never seemed to change.

At the time, the engineers didn't have a direct line to these customers. Their experiences traveled through call centers and service channels before reaching us, condensed into notes, summaries, and verbatims.

So we did what engineers do. We followed the reported steps. We worked through combinations of button presses. We exercised the interface in ways no reasonable owner ever would. We dug through firmware code. We contacted the manufacturer and asked them to investigate their production process.

The possibility hanging over all of this was unpleasant: maybe we had shipped a widespread defect and somehow failed to discover it ourselves.

But no, our units worked. The manufacturer's units worked. Every immediate investigation ended in some variation of the same conclusion:

* Trouble not found

Then we finally got one of the returned smokers into our hands. The problem became immediately obvious.

Every new unit shipped with a temporary graphic laid over its display. Appliances spend most of their lives on retail shelves without power, so the label was intended to show shoppers what the screen would look like when the smoker was turned on. It did its job a little too well.

The printed display looked so convincingly like the real display beneath it that some customers didn't realize it was a label. They would press a button, the smoker would beep, and the electronics underneath would respond. The actual display would change, but all the customer could see was an extremely convincing, completely static picture of that display printed on a piece of plastic.

Nothing was wrong with the electronics, but the customers had not invented the problem. They had described what the experience looked like from where they were standing. What they could not tell us was why.

The permanent fix was almost embarrassingly simple. We added a little yellow corner to the label:

* PEEL HERE

The lesson wasn't that the customer had diagnosed the problem correctly. They hadn't. The lesson was that their imperfect explanation did not mean there wasn't a problem. A report and a diagnosis are different things.

> "Trouble not found" is supposed to describe the limits of the investigation. It should never be mistaken for proof that no trouble existed.
 
There is a danger when we forget that distinction. We begin to confuse **reproducibility with reality**.

The thing we can demonstrate feels more real than the thing somebody merely experienced. But our ability to observe something is a different question from whether it happened.

I have been wondering lately how often we make the same mistake with people.

---

### Something I Was Told

I have been thinking about someone I know.

Over time, I have watched someone's public behavior repeatedly create friction in a community I care about. I am deliberately withholding the specifics. Some of it happened in plain view. Some of it comes from the ordinary accumulation through which we form opinions about one another.

The particulars change, but the pattern feels familiar. Something happens. People get angry. Relationships strain. There are consequences, or at least what look like consequences for a while.

Then enough time passes. The temperature drops. The community reorganizes itself around the disruption. And somehow the person remains where they were before—still present, still visible, still capable of being treated as though the last episode was an exception rather than another entry in a growing record.

That is part of what frustrates me. Bad behavior does not necessarily go unseen. Sometimes everyone sees it. Sometimes people even react to it. But reaction and consequence are not the same thing, and consequence is not always durable. Eventually the incident becomes another thing everybody remembers but nobody quite knows what to do with.

That's how reputation normally works. We accumulate information.

* Someone is rude to a waiter.
* Someone constantly takes credit.
* Someone cannot tolerate being contradicted.
* Someone treats every friendship as an audience.
* Someone picks fights.

Eventually we stop describing incidents and begin describing a person. No courtroom is convened. No single episode must prove the case beyond a reasonable doubt. Character emerges from accumulation.

But then someone tells you something much more serious, and suddenly the rules change.

Someone I care about once trusted me with an account of sexual misconduct involving this person. I will not describe it. I won't even hint at the details. What I can say is that I believed the person who told me, and what they told me changed the way I understood someone I thought I already knew.

That creates an awkward kind of knowledge.

I was not there. I cannot independently establish everything that happened. And even if I could, believing someone does not transfer ownership of their experience. The story was entrusted to me. It was not provided as evidence that I could deploy whenever I wanted to persuade somebody else. So no, I will not recount what happened here.

Some things I know are mine to tell.

Other things I know are mine only to carry.

But the problem is that carrying that knowledge still changes me.

I believed what I had been told. The harder question was what that belief entitled—or obligated—me to do.

---

### The Threshold of Certainty

A conversation with friends eventually reduced this discomfort to two words.

**Racist. Rapist.**

One consonant separates the words.

What interested me wasn't the similarity of the words themselves, but how differently we sometimes construct social knowledge around the accusations they name. This is not an argument that accusations of racism are always believed. They aren't. It isn't an argument that people accused of racism are invariably punished. They obviously aren't. And certainly not because racism is somehow trivial compared with sexual violence.

The difference I'm interested in often happens before the consequences.

It concerns what we allow ourselves to **know**. It is in the way an accusation becomes socially meaningful.

Imagine someone makes a racist remark in public. There may be a recording. A post. A screenshot. Twenty people sitting around the table. [A conference call](https://www.npr.org/2018/07/12/628284744/papa-johns-founder-quits-as-chairman-after-using-the-n-word-during-conference-ca).

We can argue endlessly about what the statement means. Whether it was actually racist. Whether intent matters. Whether it reflects ignorance, prejudice, malice, or something else. But often everyone is arguing about the meaning of the same observable thing. The evidence exists.

Sexual abuse frequently presents society with a different problem. The meaning of the event may be horrifyingly clear to the person who experienced it. But everyone else arrives afterward.

Often there is no recording. No audience. No broken display.

There may be no artifact capable of reproducing the experience for someone who was not there. The person who experienced it may be the only record of what happened. Suddenly our standards for what counts as knowledge become remarkably formal.

* Were you there?
* Are there messages?
* Did anyone else see anything?
* Why didn't they say something earlier?
* Has anyone else accused them?
* Could they have misunderstood?
* Could they be lying?
* What proof is there?

Some skepticism is necessary. Serious accusations deserve serious consideration, including consideration of the person being accused. Fairness matters. But there is a strange consequence to that principle.

> Sometimes the more serious an allegation becomes, the more certainty we require before allowing ourselves to believe it and act upon it.

The worse the alleged act, the higher the epistemological wall.

Because many forms of sexual abuse happen precisely where independent witnesses are absent, the acts carrying the greatest moral weight can be among the hardest to convert into social knowledge. We look for the trouble, and we don't find anything we can hold in our hands.

The danger is that “I cannot verify this” quietly becomes “there is nothing here I am entitled to believe, and nothing this knowledge should require of me.” Uncertainty about what happened becomes permission to behave as though nothing happened.

But belief, action, and punishment do not have to share a single threshold. What I privately find credible can alter my own trust and behavior without becoming a public accusation. A community can take precautions—reconsidering positions of trust, paying closer attention, creating safer ways to report concerns—without pretending it has reached a judicial verdict. Formal punishment may reasonably require something more still.

Those distinctions matter. The false choice is believing that we must either establish an allegation beyond uncertainty or proceed exactly as though we never heard it.

---

### The Things We Accumulate

Ordinary social life would be impossible if every piece of testimony required forensic verification.

If someone tells me that a colleague screamed at them in a meeting I didn't attend, I may believe them. If several friends independently tell me that someone is selfish, I probably incorporate that information into my understanding of the person. If someone says a restaurant treated them terribly, I don't demand security footage before deciding I might eat somewhere else.

We live almost entirely by imperfect information. We decide whom to trust. We notice patterns. We weigh credibility. We revise our models of people.

Yet, those models are not equally easy to revise.

If I already think someone is an asshole, another story about them behaving like one slips neatly into place. Tell me instead that the same person did something so serious that believing it would require me to fundamentally reorganize my understanding of them, and suddenly the old model becomes strangely resilient.

Reputation stops being what the new information is allowed to change. Reputation becomes evidence against the new information.

* They've always been nice to me.
* I've known them for twenty years.
* They do a lot for the community.
* They have daughters.
* I've never seen them behave like that.

That last sentence is particularly peculiar. Of course you haven't. Private misconduct is not disproven by public normalcy.

Someone capable of predatory behavior does not necessarily behave predatorily toward every person in every setting. The ability to maintain an ordinary public identity can be part of what allows private misconduct to remain private. But human beings dislike holding contradictory models of the same person.

* Generous donor.
* Predator.

* Funny friend.
* Abuser.

* Supportive peer.
* Dangerous person.

We want one version to invalidate the other. So reputation stops being what is under examination and becomes part of the defense. And inaction, whatever its intention, preserves that existing arrangement.

These statements may all be literally true, but neutrality is not the absence of a decision. Sometimes neutrality means preserving the social arrangement that existed before the allegation. The person remains invited. The position remains theirs. Relationships continue as before.

That does not necessarily mean everyone who fails to intervene has secretly chosen to back the accused. Sometimes people genuinely lack the information, authority, or standing to know what intervention would even mean.

But inaction is still consequential. The arrangement survives whether preserving it was the intention or not.

---

### Waiting Before The Noun

This is another reason I keep returning to the difference between *racist* and *rapist*.

We have developed language that can sometimes separate racist conduct from total identity.  A remark can be racist without everyone immediately resolving whether the speaker is, permanently and comprehensively, a racist. We can discuss prejudice, ignorance, stereotypes, discriminatory behavior, intent, and impact while still arguing about what those things mean about the whole person. 

At the severe end of sexual violence, that linguistic distance seems to collapse. If someone committed rape, the noun arrives almost automatically.

Rapist.

The word does not merely describe something someone did. It threatens to become the most important thing we know about them. And perhaps it should.

If I accept that someone made an offensive joke, I can condemn the act while retaining many possible models of the person who made it. If I accept that someone committed rape, it becomes much harder to treat that fact as merely one datum among many. What waits on the other side of belief feels irreversible.

So we linger before the noun:

* An allegation
* An accusation
* An unfortunate story
* A misunderstanding
* A complicated situation

The language grows softer as the implications of belief grow larger.

---

### Standing At The Edge

I was strongly reluctant to publish this essay. I came very close to hitting the delete button after writing it.

This is because I have never experienced sexual abuse myself.

I cannot tell you what it feels like to survive it. I cannot tell you what it does to someone's sense of safety, what it costs to remember it, or what it costs to tell another person about it.

Those experiences aren't mine. I don't want proximity to someone else's pain to masquerade as authority over it.  So I had to think long and hard about why I felt compelled to write about any of this publicly.

> Proximity has an experience of its own.

I have watched what this kind of knowledge can do to people I care about. I have watched its weight move through friendships and relationships, altering how people understand one another and how safely they feel able to exist within a community they share.

And I have felt what that proximity does to me.

I want to do something. I want justice. I want resolution. Or at least whatever those words could responsibly mean from where I am standing.

I want the ambiguity to give way to something definite enough that everybody knows what should happen next. I want the clarity of an engineer setting a defective unit on the workbench and saying "Look. There's the problem. We can fix it."

But people are not appliances. There is no workbench. There may never be definitive evidence capable of giving everyone identical knowledge and leading everyone to the same conclusion.

Wanting justice does not give me ownership of someone's harm. It is not my experience to narrate or my outcome to dictate. But that doesn't mean I am living outside of it.

There are people who end up standing at the edge of someone else's trauma: close enough that it changes them, but not so close that they can claim the experience as their own.

* Partners
* Friends
* Family
* Colleagues
* People connected to both sides of a relationship or community

The edge is the boundary between knowing enough that you cannot honestly ignore something and possessing too little knowledge—or too little authority—to resolve it yourself. That is where I find myself.

There is another part of this that makes me angrier than the uncertainty alone.

The absence of witnesses is not always an unfortunate coincidence. Abuse is often an exercise of power, and privacy can be part of that power. A person who harms someone behind closed doors may emerge into a world where their reputation is intact, the other person's account is difficult to verify, and everyone else is asked to choose between two incompatible stories.

I cannot know how consciously any particular person calculates that advantage. But the advantage exists. Privacy can protect abuse from scrutiny whether or not that protection was deliberately planned, and it would be naive to imagine that nobody ever recognizes the protection it affords them.

The discipline I owe uncertainty should constrain what I claim. It does not require me to stop being angry about what uncertainty can protect.

### The Painful Duality

What bothered me wasn't that another episode of visible behavior had produced another round of social consequences. What bothered me was how familiar the cycle felt—and how easy that behavior was to process.

Everybody could see it. Nobody had to decide whose private account deserved belief. Nobody had to hold two contradictory versions of the same person in their mind. Nobody had to risk being the person who believed something that later proved untrue.

The behavior was visible. Other people could see it, document it, and react to the same thing.

Perhaps the problem isn't simply that we don't believe victims. Sometimes we do. Perhaps the more uncomfortable problem is that **belief and consequence occupy different thresholds**.

I can believe you and still not know what I am entitled to do with that belief. A community can quietly change how it protects people without publicly declaring a verdict. An institution may decide it lacks sufficient evidence for punishment while still acknowledging that uncertainty is not the same thing as safety. And someone can carry knowledge for years that permanently changes the way they see another person without ever being able to explain that change to everyone else.

Everyone knows. Nobody knows.

Both sentences somehow remain true.

---

### Trouble Not Found

There are legitimate reasons engineers try to reproduce failures.

We can misunderstand customers. Customers can misunderstand machines. Components fail for unrelated reasons. Evidence matters. Skepticism matters.

We should not abandon standards simply because uncertainty is uncomfortable. But those standards should discipline the claims we make. They should not erase the information we possess.

Someone I care about told me something. I believe them. I cannot independently establish everything that happened. I cannot tell their story simply because knowing it has affected me. I cannot turn my belief into certainty for everyone else. Those are real limits. They limit what I know. They limit what I can say. They limit what I am entitled to demand of others. But they do not require me to behave as though I was never told anything at all.

There is an enormous difference between saying

* "I could not find the trouble."

and:

* "There was no trouble."

The first admits the limits of the observer.

The second makes a claim about someone else's reality.

I know which one I am entitled to say.

**Trouble not found is not the same thing as no trouble.**
