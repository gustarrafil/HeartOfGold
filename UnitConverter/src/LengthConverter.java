public class LengthConverter {
    final private  double INCH_TO_METER = 0.0254;
    final private  double FOOT_TO_METER = 0.3048;
    final private  double MILE_TO_METER = 1609.344;
    final private  double MM_TO_METER = 0.001;
    final private  double CM_TO_METER = 0.01;
    final private  double KM_TO_METER = 1000;
    final private  double YD_TO_METER = 0.9144;

    private double factor;

    /**
     * Constructs a unit converter to convert between a unit and meters
     *
     * @param unit
     *              the unit used by this converter
     */

    public LengthConverter (String unit) {
        if (unit.equals("in")) {
            factor = INCH_TO_METER;
        } else if (unit.equals("ft")) {
            factor = FOOT_TO_METER;
        } else if (unit.equals("mi")) {
            factor = MILE_TO_METER;
        } else if (unit.equals("mm")) {
            factor = MM_TO_METER;
        } else if (unit.equals("cm")) {
            factor = CM_TO_METER;
        } else if (unit.equals("km")) {
            factor = KM_TO_METER;
        } else if (unit.equals("yd")) {
            factor = YD_TO_METER;
        }
    }

    /**
     * Converts a measurement to meters.
     *
     * @param measurement
     *                  a measurement in the units of this converter
     * @return the equivalent meters
     */
    public double toMeters (double measurement) {
        return (measurement * factor);
    }

    /**
     * Converts a measurement from meters.
     *
     * @param measurement
     *                  the measurement to convert from meters
     * @return the equivalent value in the unit of this convert
     */
    public double fromMeters (double measurement) {
        return (measurement * factor);
    }
}
