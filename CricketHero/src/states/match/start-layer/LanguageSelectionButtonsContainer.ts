namespace CricketHero {
    
    export class LanguageSelectionButtonsContainer extends Phaser.Group {

        private tweening: boolean;
        private buttonsShown: boolean;
        private btnLanguage: Phaser.Button;
        private btnEnglish: Phaser.Button;
        private btnPortuguese: Phaser.Button;
        private btnHindu: Phaser.Button;

        constructor(game: Phaser.Game) {
    
            super(game, null, "language-selection-buttons-container");

            this.scale.y = GameVars.scaleY;

            this.tweening = false;
            this.buttonsShown = false;

            this.btnEnglish = new Phaser.Button(this.game, 0, 0, "texture_atlas_1", this.onLanguageButtonClicked, this);
            this.btnEnglish.setFrames("btn_language_en_on.png", "btn_language_en_off.png", "btn_language_en_on.png");
            this.btnEnglish.anchor.set(.5);
            this.btnEnglish.visible = false;
            this.btnEnglish.name = GameConstants.LAGUANGE_EN;
            this.add(this.btnEnglish);

            this.btnPortuguese = new Phaser.Button(this.game, 0, 0, "texture_atlas_1", this.onLanguageButtonClicked, this);
            this.btnPortuguese.setFrames("btn_language_pt_on.png", "btn_language_pt_off.png", "btn_language_pt_on.png");
            this.btnPortuguese.anchor.set(.5);
            this.btnPortuguese.visible = false;
            this.btnPortuguese.name = GameConstants.LANGUAGE_PT;
            this.add(this.btnPortuguese);

            this.btnHindu = new Phaser.Button(this.game, 0, 0, "texture_atlas_1", this.onLanguageButtonClicked, this);
            this.btnHindu.setFrames("btn_language_hi_on.png", "btn_language_hi_off.png", "btn_language_hi_on.png");
            this.btnHindu.anchor.set(.5);
            this.btnHindu.visible = false;
            this.btnHindu.name = GameConstants.LANGUAGE_HI;
            this.add(this.btnHindu);

            this.btnLanguage = new Phaser.Button(this.game, 0, 0, "texture_atlas_1", this.onSelectionButtonClicked, this);
            this.btnLanguage.setFrames("btn_language_selection_on.png", "btn_language_selection_off.png", "btn_language_selection_on.png");
            this.btnLanguage.anchor.set(.5);
            this.add(this.btnLanguage);
        }

        private showButtons(): void {

            this.buttonsShown = true;
           
            this.tweening = true;

            this.btnEnglish.visible = true;
            this.game.add.tween(this.btnEnglish)
                .to ({x: 50}, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.tweening = false;
                }, this);

            this.btnPortuguese.visible = true;
            this.game.add.tween(this.btnPortuguese)
                .to ({x: 100}, 150, Phaser.Easing.Cubic.Out, true);

            this.btnHindu.visible = true;
            this.game.add.tween(this.btnHindu)
                .to ({x: 150}, 150, Phaser.Easing.Cubic.Out, true);
        }

        private hideButtons(): void {

            this.buttonsShown = false;

            this.tweening = true;

            this.game.add.tween(this.btnEnglish)
                .to ({x: 0}, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.tweening = false;
                    this.btnEnglish.visible = false;
                }, this);

            this.game.add.tween(this.btnPortuguese)
                .to ({x: 0}, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.btnPortuguese.visible = false;
                }, this);

            this.game.add.tween(this.btnHindu)
                .to ({x: 0}, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.btnHindu.visible = false;
                }, this);
        }

        private onSelectionButtonClicked(): void {

            if (this.tweening) {
                return;
            }
            
            if (this.buttonsShown) {
                this.hideButtons();
            } else {
                this.showButtons();
            }
        }

        private onLanguageButtonClicked(b: Phaser.Button): void {

            if (this.tweening) {
                return;
            }

            this.hideButtons();
            
            GameManager.changeLanguege(b.name);
        }
    }
}
