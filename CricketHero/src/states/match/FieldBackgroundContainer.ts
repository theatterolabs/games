namespace CricketHero {
    
    export class FieldBackgroundContainer extends Phaser.Group {

        private leftLineEffect: Phaser.Image;
        private rightLineEffect: Phaser.Image;
        private lastSide: string;
        private burnStain: Phaser.Image;
        private leftPatch: Phaser.Image;
        private rightPatch: Phaser.Image;
        private fieldBackground: Phaser.Image;
        private hole: Phaser.Image;
      
        constructor(game: Phaser.Game) {
    
            super(game, null, "field-background-container");

            this.lastSide = null;
            this.burnStain = null;

            this.fieldBackground = new Phaser.Image(this.game, 0, -45, "texture_atlas_4", "bg_ground.png");
            this.fieldBackground.anchor.set(.5, 0);
            this.add(this.fieldBackground);

            this.leftLineEffect = this.create(0, -45, "texture_atlas_4", "lineEffect_01.png");
            this.leftLineEffect.anchor.x = .5;
            this.leftLineEffect.scale.x = -1;
            this.leftLineEffect.animations.add("shine", Phaser.Animation.generateFrameNames("lineEffect_", 1, 12, ".png", 2));
            this.leftLineEffect.visible = false;

            this.rightLineEffect = this.create(0, -45, "texture_atlas_4", "lineEffect_01.png");
            this.rightLineEffect.anchor.x = .5;
            this.rightLineEffect.animations.add("shine", Phaser.Animation.generateFrameNames("lineEffect_", 1, 12, ".png", 2));
            this.rightLineEffect.visible = false;
        }

        public addPatches(fieldPatchesContainer: Phaser.Group, playerContainer: Phaser.Group): void {

            // TODO: se añaden de manera temporal a este grupo
            this.leftPatch = new Phaser.Image(this.game, 0, this.fieldBackground.y + this.fieldBackground.height, "texture_atlas_4", "field_left_patch.png");
            this.leftPatch.anchor.set(.5, 1);
            this.leftPatch.visible = false;
            fieldPatchesContainer.add(this.leftPatch);

            this.rightPatch = new Phaser.Image(this.game, 0, this.fieldBackground.y + this.fieldBackground.height, "texture_atlas_4", "field_right_patch.png");
            this.rightPatch.anchor.set(.5, 1);
            this.rightPatch.visible = false;
            fieldPatchesContainer.add(this.rightPatch);

            this.hole = new Phaser.Image(this.game, 122, this.rightPatch.y - this.rightPatch.height, "texture_atlas_4", "hole.png");
            this.hole.anchor.set(.5);
            this.hole.scale.y = .36;
            this.hole.visible = false;
            playerContainer.addAt(this.hole, 0);
        }

        public openHole(): void {

            StageContainer.currentInstance.onHoleOpened();

            let patch: Phaser.Image;
            
            if (GameVars.matchData.heroSide === GameConstants.CENTER || GameVars.matchData.heroSide === GameConstants.RIGHT) {
                patch = this.rightPatch;
                this.hole.x = 122;
            } else {
                patch = this.leftPatch;
                this.hole.x = -122;
            }

            this.hole.visible = true;
            this.hole.scale.set(0);

            this.game.add.tween(this.hole.scale)
                .to ({ x: 1, y: .36 }, 500, Phaser.Easing.Cubic.Out, true, 100);

            patch.visible = true;
        }

        public closeHole(): void {
            
            this.game.add.tween(this.hole.scale)
                .to ({ x: 0, y: 0 }, 400, Phaser.Easing.Cubic.Out, true, 650)
                .onComplete.add(function(): void {
                    this.hole.visible = false;
                }, this);
        }

        public hidePatch(): void {

            if (GameVars.matchData.heroSide === GameConstants.CENTER || GameVars.matchData.heroSide === GameConstants.RIGHT) {
                this.rightPatch.visible = false;
            } else {
                this.leftPatch.visible = false;
            }
        }

        public animateLine(): void {

            if (this.lastSide === GameVars.activatedCircleSide) {
                return;
            }

            if (GameVars.activatedCircleSide === GameConstants.LEFT) {
                this.leftLineEffect.visible = true;
                this.leftLineEffect.play("shine", 12, false)
                    .onComplete.add(function(): void {
                        this.leftLineEffect.visible = false;
                    }, this);
            } else {
                this.rightLineEffect.visible = true;
                this.rightLineEffect.play("shine", 12, false)
                    .onComplete.add(function(): void {
                        this.rightLineEffect.visible = false;
                    }, this);
            }

            this.lastSide = GameVars.activatedCircleSide;
        }

        public explosion(): void {

            if (this.burnStain !== null) {
                return;
            }

            this.burnStain = new Phaser.Image(this.game, 35, 190, "texture_atlas_1", "burn_stain.png");
            this.burnStain.anchor.set(.5);
            this.burnStain.scale.set(1.35);
            this.add(this.burnStain);
        }
    }
}
