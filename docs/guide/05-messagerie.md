---
id: 05-messagerie
sidebar_label: Messagerie & Réservations
sidebar_position: 5
---

# Messagerie et Réservations

## Le chat en temps réel

Nomu intègre un système de messagerie **instantanée et fluide** :

- Les messages sont délivrés **en temps réel**
- Des **indicateurs de frappe** vous informent quand votre interlocuteur est en train d'écrire
- Vous pouvez envoyer des **messages texte** et des **photos**
- Les messages non lus sont clairement **signalés**

**Mobile**

<div style={{display: 'flex', gap: '16px', justifyContent: 'flex-start', flexWrap: 'wrap', margin: '24px 0'}}>
  <img src="/img/mobile/mobile-conversations.png" alt="Liste des conversations" style={{maxWidth: '220px'}} />
  <img src="/img/mobile/mobile-message.png" alt="Conversation ouverte" style={{maxWidth: '220px'}} />
  <img src="/img/mobile/mobile-message-offcanva.png" alt="Options de conversation" style={{maxWidth: '220px'}} />
</div>

---

## Le cycle complet d'une réservation

Nomu intègre un système de réservation directement dans vos conversations, pour planifier vos rencontres de manière sécurisée et claire.

### 1. La proposition

Dans une conversation active, appuyez sur le **bouton Réserver** (icône calendrier).

Un formulaire s'ouvre pour définir la date et l'heure souhaitées pour la rencontre. Validez pour envoyer la demande.

**Mobile**

<img src="/img/mobile/mobile-activity-form.png" alt="Formulaire de réservation mobile" style={{maxWidth: '220px', display: 'block', margin: '16px 0'}} />

**Web**

<img src="/img/web/web-conversations-messages-activity-form.png" alt="Formulaire de réservation web" style={{maxWidth: '600px', display: 'block', margin: '16px 0'}} />

### 2. La carte interactive

Une fois envoyée, la demande apparaît dans le flux de messages sous la forme d'une **bulle spéciale** — la Reservation Card.

Son statut initial est **En attente**. Cette carte est visible par les deux participants.

**Mobile**

<img src="/img/mobile/mobile-activity-request.png" alt="Réservation en attente mobile" style={{maxWidth: '220px', display: 'block', margin: '16px 0'}} />

**Web**

<img src="/img/web/web-activity-request.png" alt="Réservation en attente web" style={{maxWidth: '600px', display: 'block', margin: '16px 0'}} />

### 3. La réponse du local

Le destinataire reçoit une notification. Depuis le chat, il peut visualiser les détails et choisir :

| Action | Résultat |
|--------|----------|
| **Accepter** | La réservation est confirmée |
| **Refuser** | La demande est annulée |

### 4. Validation et suivi

La carte de réservation se **met à jour en temps réel** pour refléter le nouveau statut.

Si la réservation est acceptée :

- Votre rencontre est officiellement planifiée dans le système
- Les deux parties disposent d'une trace visible dans la conversation

**Mobile**

<img src="/img/mobile/mobile-activity-accepted.png" alt="Réservation acceptée mobile" style={{maxWidth: '220px', display: 'block', margin: '16px 0'}} />

**Web**

<img src="/img/web/web-activity-accepted.png" alt="Réservation acceptée web" style={{maxWidth: '600px', display: 'block', margin: '16px 0'}} />

:::tip
Avant d'envoyer une demande de réservation, échangez quelques messages pour vous mettre d'accord sur les détails de la rencontre. La réservation formalise un accord déjà établi par écrit.
:::

---

## L'onglet Réservations (calendrier)

Accédez à l'onglet **Réservations** (icône calendrier dans la barre de navigation) pour visualiser et gérer toutes vos réservations.

### Vue calendrier

Le calendrier mensuel affiche un **point coloré** sur chaque jour concerné par une réservation :

| Couleur | Signification |
|---------|---------------|
| 🟠 Ambre | Réservation en attente |
| 🟢 Vert | Réservation acceptée |
| 🔴 Rouge | Réservation refusée |

Appuyez sur un jour pour afficher le **panneau de détail** en dessous, avec les informations complètes (titre, dates, horaires, durée, prix) et les boutons Accepter / Refuser si la réservation vous est destinée.

**Mobile**

<div style={{display: 'flex', gap: '16px', justifyContent: 'flex-start', flexWrap: 'wrap', margin: '24px 0'}}>
  <img src="/img/mobile/mobile-reservations-calendar.png" alt="Réservations — vue calendrier" style={{maxWidth: '220px'}} />
  <img src="/img/mobile/mobile-reservations-list.png" alt="Réservations — vue liste" style={{maxWidth: '220px'}} />
</div>

**Web**

<div style={{display: 'flex', gap: '16px', justifyContent: 'flex-start', flexWrap: 'wrap', margin: '24px 0'}}>
  <img src="/img/web/web-activity-calendar.png" alt="Réservations calendrier web" style={{maxWidth: '450px'}} />
  <img src="/img/web/web-activity-calendar-next.png" alt="Réservations calendrier web (suite)" style={{maxWidth: '450px'}} />
</div>

### Vue liste

Basculez vers la **vue liste** (icône liste en haut à droite) pour retrouver toutes vos réservations regroupées par mois, triées par date.

**Web**

<img src="/img/web/web-activity-list.png" alt="Réservations — vue liste web" style={{maxWidth: '600px', display: 'block', margin: '16px 0'}} />

### Filtres

Les quatre filtres en haut de page s'appliquent à la fois sur le calendrier et la liste :

- **Toutes** — toutes les réservations
- **En attente** — demandes en cours
- **Acceptées** — réservations confirmées
- **Refusées** — demandes déclinées

---

## Gérer vos conversations

Depuis l'onglet Messages, toutes vos conversations sont classées par **date du dernier message**.

- Un **point coloré** indique les messages non lus
- Cliquez sur une conversation pour l'ouvrir
- L'historique complet de vos échanges est conservé
