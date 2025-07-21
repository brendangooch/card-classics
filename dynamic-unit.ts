
type easeFn = (t: number) => number;
type easeOption = 'none' | 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';

export class DynamicUnit {

    private easeFn: easeFn;
    private duration: number = 0;
    private elapsed: number = 0;
    private currentValue: number = 0;

    public get current(): number {
        // tmp
        return this.currentValue;
    }

    public get isActive(): boolean {
        return this.elapsed !== this.duration;
    }

    public get isComplete(): boolean {
        return this.elapsed === this.duration;
    }

    public run(duration: number, ease: easeOption): void {
        // this.elapsed = 0;
    }

    public update(dt: number): void {
        if (this.isActive) {

        }
    }

    private increment(): void {
        // Increment logic based on elapsed time and easing function
    }

    private get progress(): number {
        return this.elapsed / this.duration;
    }


}